import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a directory path.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * directoryPath(fakerCore) // '/etc/mail'
 *
 * @since 3.1.0
 */
export function directoryPath(fakerCore: FakerCore): string {
  const paths = assertLocaleData(
    fakerCore.locale.system?.directory_path,
    'system.directory_path'
  );
  return arrayElement(fakerCore, paths);
}
