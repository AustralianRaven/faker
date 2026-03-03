import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random book format.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * format(fakerCore) // 'Hardcover'
 *
 * @since 9.1.0
 */
export function format(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.book?.format, 'book.format')
  );
}
