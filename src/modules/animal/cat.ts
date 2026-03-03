import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random cat breed.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cat(fakerCore) // 'Singapura'
 *
 * @since 5.5.0
 */
export function cat(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.animal?.cat, 'animal.cat')
  );
}
