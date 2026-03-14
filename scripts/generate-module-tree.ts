import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SyntaxKind } from 'ts-morph';
import { getDeprecated, getJsDocs } from './apidocs/processing/jsdocs';
import { getProject } from './apidocs/project';
import { toCamelCase, toKebabCase } from './shared/character-case';
import { formatTypescript } from './shared/format';
import { FILE_PATH_SRC } from './shared/paths';

const project = getProject();

const directories = project
  .getDirectoryOrThrow('src')
  .getDirectoryOrThrow('modules')
  .getDirectories();

const moduleNames = new Set(directories.map((dir) => dir.getBaseName()));

//#region Module
for (const directory of directories) {
  const moduleName = directory.getBaseName();

  console.log(`Processing module: ${moduleName}`);
  //#region Index
  const indexFile = directory.getSourceFileOrThrow('index.ts');

  const header = indexFile
    .getStatements()[0]
    ?.getLeadingCommentRanges()
    .map((c) => c.getText());

  const imports = new Set([
    `import { SimpleModuleBase } from '../../internal/module-base';`,
    `import { ModuleBase } from '../../internal/module-base';`,
    `import type { Faker } from '../../faker';`,
    `import type { LiteralUnion } from '../../internal/types';`,
    `import { moduleRegistry } from '../../module-registry';`,
  ]);
  if (moduleName === 'image') {
    imports.add(`import type { SexType } from '../person';`);
  }

  const exports: string[] = indexFile
    .getExportDeclarations()
    .map((exp) => exp.getText());

  const typesFile = directory.getSourceFile('_types.ts');
  if (typesFile) {
    const typesToImport = [
      typesFile.getEnums(),
      typesFile.getTypeAliases(),
      typesFile.getInterfaces(),
    ]
      .flat()
      .filter((decl) => decl.isExported())
      .map((decl) => decl.getName());

    if (typesToImport.length > 0) {
      imports.add(
        `import type { ${typesToImport.join(', ')} } from './_types';`
      );
    }
  }

  const content: string[] = [];
  const classes = indexFile?.getClasses() ?? [];
  const deprecations: string[] = [];

  //#region Module Classes
  for (const cls of classes) {
    content.push(getJsDocs(cls).getText());
    const methodNames = cls.getMethods().map((method) => method.getName());
    for (const method of cls.getMethods()) {
      method.remove();
    }

    for (const methodName of methodNames) {
      const methodFile = directory.getSourceFileOrThrow(
        `${toKebabCase(methodName)}.ts`
      );

      const typesToImport = [
        methodFile.getEnums(),
        methodFile.getTypeAliases(),
        methodFile.getInterfaces(),
      ]
        .flat()
        .filter((decl) => decl.isExported())
        .map((decl) => decl.getName());

      imports.add(
        `import { ${methodName} as ${toCamelCase(moduleName, methodName)} } from './${toKebabCase(methodName)}';`
      );
      if (typesToImport.length > 0) {
        imports.add(
          `import type { ${typesToImport.join(', ')} } from './${toKebabCase(methodName)}';`
        );
      }

      const functions = methodFile
        .getChildrenOfKind(SyntaxKind.FunctionDeclaration)
        .filter((fn) => fn.isExported())
        .filter((fn) => fn.getName() === methodName);

      const parts: string[] = [];

      const restoreFakerTreeInvocations = (
        _: string,
        module: string,
        method: string
      ): string =>
        methodNames.includes(`${module}${method}`)
          ? `faker.${moduleName}.${module}${method}(`
          : moduleNames.has(module)
            ? `faker.${module}.${toCamelCase(method)}(`
            : `faker.${module}${method}(`;

      for (const child of functions) {
        //#region Module Functions
        const jsDocs = child.getJsDocs()[0];

        if (child.hasBody()) {
          const params = child
            .getSignature()
            .getParameters()
            .slice(1)
            .map((param) => param.getName());

          const isDeprecated = jsDocs && getDeprecated(jsDocs);
          if (isDeprecated) {
            deprecations.push(methodName);
          }

          child.setBodyText(
            `${
              isDeprecated
                ? '// eslint-disable-next-line @typescript-eslint/no-deprecated -- Internal call\n'
                : ''
            }return ${toCamelCase(moduleName, methodName)}(this.faker.fakerCore, ${params.join(', ')});`
          );
        }

        if (jsDocs) {
          let description = jsDocs
            .getFullText()
            // Param
            .replace(' * @param fakerCore The FakerCore to use.\n', '')
            .replaceAll(/ +\*\n +\*\n/g, ' *\n')
            // Examples
            .replaceAll(
              new RegExp(`${methodName}\\(fakerCore(?:, ?)?`, 'g'),
              `faker.${moduleName}.${methodName}(`
            )
            // Method References
            .replaceAll(
              /\b([a-z]+)([A-Z][a-zA-Z]+)\(fakerCore(?:, ?)?/g,
              restoreFakerTreeInvocations
            )
            .replaceAll(
              /\b([a-zA-Z]+)\(fakerCore(?:, ?)?/g,
              (_, method: string) =>
                `faker.${moduleName}.${toCamelCase(method)}(`
            )
            // Fake cleanup
            .replaceAll(
              'Defaults to `[ fakerCore.locale ]`.',
              'Defaults to the moduleRegistry and locale data.'
            );

          if (methodName === 'fake') {
            description = description.replaceAll(', [...]', '');
          }

          parts.push(description);
        }

        const signature = child
          .getSignature()
          .getDeclaration()
          .getText()
          // Adapt signature
          .replace('export function ', '')
          .replace(/\((\n +)?fakerCore: FakerCore,?/, '(')
          // Adapt nested options defaults
          .replaceAll(
            /(?<= +\* .*?)\bgetDefaultRefDate\(fakerCore(?:, ?)?/g,
            'faker.defaultRefDate('
          )
          .replaceAll(
            /(?<= +\* .*?)\b([a-z]+)([A-Z][a-zA-Z]+)\(fakerCore(?:, ?)?/g,
            restoreFakerTreeInvocations
          );

        parts.push(signature);
        //#endregion
      }

      cls.addMember(
        parts
          .join('\n')
          // Fake cleanup
          .replaceAll(
            '[fakerCore.locale]',
            '[moduleRegistry, this.faker.rawDefinitions]'
          )
      );
    }
    //#endregion

    content.push(cls.getText(), '');
  }

  content.unshift(...header, ...imports, '', ...exports, '');

  writeFileSync(
    resolve(FILE_PATH_SRC, 'modules', moduleName, 'index.ts'),
    await formatTypescript(content.join('\n')),
    'utf8'
  );
  //#endregion

  //#region Module Registry
  const methodNames = new Set(
    directory
      .getSourceFiles()
      .filter(
        (file) =>
          file.getBaseName() !== 'index.ts' &&
          !file.getBaseName().startsWith('_')
      )
      .flatMap((file) =>
        file
          .getFunctions()
          .filter((fn) => fn.isExported())
          .filter(
            (fn) =>
              toKebabCase(fn.getNameOrThrow()) ===
              file.getBaseNameWithoutExtension()
          )
          .map((fn) => fn.getNameOrThrow())
          .map((s) => toCamelCase(s))
      )
  );

  const registry = `
${[...methodNames].map((methodName) => `import { ${methodName} as ${toCamelCase(moduleName, methodName)} } from './${toKebabCase(methodName)}';`).join('\n')}

export const ${toCamelCase(moduleName)}Module = {
${[...methodNames]
  .toSorted()
  .map(
    (name) =>
      `${
        deprecations.includes(name)
          ? '// eslint-disable-next-line @typescript-eslint/no-deprecated -- Internal setup\n'
          : ''
      }  ${name}: ${toCamelCase(moduleName, name)},`
  )
  .join('\n')}
};
`;

  writeFileSync(
    resolve(FILE_PATH_SRC, 'modules', moduleName, 'registry.ts'),
    await formatTypescript(registry),
    'utf8'
  );
  //#endregion
}
//#endregion

//#region Global Module Registry
console.log('Generating module registry...');
const moduleRegistryContent = `
${[...moduleNames]
  .map(
    (name) =>
      `import { ${toCamelCase(name)}Module } from './modules/${name}/registry';`
  )
  .join('\n')}

export const moduleRegistry = {
${[...moduleNames]
  .map((name) => `  ${toCamelCase(name)}: ${toCamelCase(name)}Module,`)
  .join('\n')}
};
`;

writeFileSync(
  resolve(FILE_PATH_SRC, 'module-registry.ts'),
  await formatTypescript(moduleRegistryContent),
  'utf8'
);
//#endregion
