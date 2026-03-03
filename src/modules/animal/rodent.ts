import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random rodent breed.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * rodent(fakerCore) // 'Cuscomys ashanika'
 *
 * @since 7.4.0
 */
export function rodent(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.animal?.rodent, 'animal.rodent')
  );
}
