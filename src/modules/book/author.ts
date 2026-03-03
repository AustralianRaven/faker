import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random author name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * author(fakerCore) // 'William Shakespeare'
 *
 * @since 9.1.0
 */
export function author(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.book?.author, 'book.author')
  );
}
