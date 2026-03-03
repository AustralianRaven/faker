import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a file type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fileType(fakerCore) // 'message'
 *
 * @since 3.1.0
 */
export function fileType(fakerCore: FakerCore): string {
  const mimeTypes = assertLocaleData(
    fakerCore.locale.system?.mime_type,
    'system.mime_type'
  );

  const typeSet = new Set(
    Object.keys(mimeTypes).map((key) => key.split('/')[0])
  );
  return arrayElement(fakerCore, [...typeSet]);
}
