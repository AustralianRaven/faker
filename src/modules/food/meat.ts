import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random meat
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * meat(fakerCore) // 'venison'
 *
 * @since 9.0.0
 */
export function meat(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.food?.meat, 'food.meat')
  );
}
