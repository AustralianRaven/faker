import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random spice name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * spice(fakerCore) // 'chilli'
 *
 * @since 9.0.0
 */
export function spice(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.food?.spice, 'food.spice')
  );
}
