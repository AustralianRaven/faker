import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random database collation.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * collation(fakerCore) // 'utf8_unicode_ci'
 *
 * @since 4.0.0
 */
export function collation(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.database?.collation, 'database.collation')
  );
}
