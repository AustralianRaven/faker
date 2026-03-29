import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'unicorn', 'oxc', 'jsdoc', 'vitest'],
  categories: {
    correctness: 'error',
    suspicious: 'error',
  },
  options: {
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
  },

  //#region global
  ignorePatterns: [
    // Skip some files that don't need linting right now
    '.github/workflows/commentCodeGeneration.ts',
    '.prettierrc.js',
    'docs/.vitepress/components/shims.d.ts',
    'docs/.vitepress/components/api-docs/format.ts',
    'docs/.vitepress/components/api-docs/method.vue', // oxlint .vue support is limited
    'docs/.vitepress/shared/utils/slugify.ts',
    'docs/.vitepress/theme/index.ts',
    'test/require.spec.cts', // parser limitation with top-level await in .cts
    'cypress/**', // separate tsconfig
  ],
  //#endregion

  rules: {
    //#region javascript
    // name: 'javascript overrides'
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-else-return': 'error',
    'no-restricted-globals': ['error', { name: 'Intl' }],
    'prefer-exponentiation-operator': 'error',
    'prefer-template': 'error',
    curly: ['error', 'all'],
    // Rules not in original ESLint config, disabled to avoid new violations
    'no-shadow': 'off',
    'no-new': 'off',
    'no-useless-constructor': 'off',
    //#endregion

    //#region typescript
    // name: 'typescript overrides'
    'typescript/array-type': [
      'error',
      { default: 'array-simple', readonly: 'generic' },
    ],
    'typescript/ban-ts-comment': 'error',
    'typescript/consistent-type-exports': 'error',
    'typescript/consistent-type-imports': 'error',
    'typescript/explicit-module-boundary-types': 'error',
    'typescript/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
      },
    ],
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-extraneous-class': 'error',
    'typescript/no-inferrable-types': ['error', { ignoreParameters: true }],
    'typescript/no-misused-spread': 'off', // string spreading is fine (mostly)
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-unnecessary-boolean-literal-compare': 'off', // requires `strictNullChecks` to be enabled
    'typescript/no-unnecessary-condition': 'off', // requires `strictNullChecks` to be enabled
    'typescript/no-unsafe-assignment': 'off',
    'typescript/no-unsafe-call': 'off',
    'typescript/no-unsafe-member-access': 'off',
    'typescript/no-unsafe-type-assertion': 'off', // not in original ESLint config, evaluate separately
    'typescript/prefer-regexp-exec': 'error',
    'typescript/require-array-sort-compare': 'off', // not in original ESLint config, evaluate separately
    'typescript/restrict-plus-operands': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: true,
        allowRegExp: false,
      },
    ],
    'typescript/restrict-template-expressions': [
      'error',
      { allowNumber: true, allowBoolean: true },
    ],
    'typescript/switch-exhaustiveness-check': [
      'error',
      {
        considerDefaultExhaustiveForUnions: true, // we consider default cases for unions valid
        requireDefaultForNonUnion: true,
      },
    ],
    'typescript/unbound-method': 'off',
    //#endregion

    //#region unicorn
    // name: 'unicorn overrides'
    // 'unicorn/import-style': 'off', // subjective & doesn't do anything for us
    'unicorn/no-array-callback-reference': 'off', // reduces readability
    'unicorn/no-array-reverse': 'off',
    'unicorn/no-nested-ternary': 'off', // incompatible with prettier
    'unicorn/no-null': 'off', // incompatible with TypeScript
    'unicorn/no-object-as-default-parameter': 'off', // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2199
    'unicorn/no-zero-fractions': 'off', // deactivated to raise awareness of floating operations
    'unicorn/number-literal-case': 'off', // incompatible with prettier
    'unicorn/numeric-separators-style': 'off', // "magic numbers" may carry specific meaning
    'unicorn/prefer-bigint-literals': 'off', // currently there is no clear argument on why literal would be better
    'unicorn/prefer-string-raw': 'off', // The additional prefix doesn't help readability
    'unicorn/prefer-string-slice': 'off', // string.substring is sometimes easier to use
    'unicorn/prefer-ternary': 'off', // ternaries aren't always better
    'unicorn/prefer-top-level-await': 'error',
    // 'unicorn/prevent-abbreviations': 'off', // if abbreviations don't reduce readability, they're fine
    //#endregion

    //#region jsdoc
    // name: 'jsdoc overrides'
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['remark'],
      },
    ],
    'jsdoc/require-param': 'error',
    'jsdoc/require-returns': 'off',
    //#endregion
  },

  //#region overrides
  overrides: [
    {
      files: ['src/locale/**/*.ts'],
      rules: {
        'unicorn/filename-case': 'off', // our locale files have a custom naming scheme
      },
    },
    {
      // name: 'src/{definitions,locales}/**/*.ts overrides'
      files: ['src/definitions/**/*.ts', 'src/locales/**/*.ts'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'snakeCase',
          },
        ],
        'unicorn/text-encoding-identifier-case': 'off',
      },
    },
    {
      // name: 'test/**/*.ts overrides'
      files: ['test/**/*.spec.ts', 'test/**/*.spec.cts', 'test/**/*.spec.d.ts'],
      rules: {
        'typescript/no-deprecated': 'off',

        'typescript/restrict-template-expressions': [
          'error',
          {
            allowNumber: true,
            allowBoolean: true,
            allowAny: true,
          },
        ],

        'vitest/expect-expect': 'off',
        'vitest/no-alias-methods': 'error',
        'vitest/no-conditional-expect': 'off', // we require conditional logic when iterating over faker instances or instances in different versions (for the docs)
        'vitest/no-conditional-tests': 'off',
        'vitest/prefer-each': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/valid-expect': ['error', { maxArgs: 2 }],
        'vitest/warn-todo': 'warn',
      },
    },
    {
      files: ['test/**/*.spec.cts'],
      rules: {
        'typescript/no-require-imports': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
  //#endregion
});
