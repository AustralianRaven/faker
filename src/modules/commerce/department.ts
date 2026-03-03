import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a department inside a shop.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * department(fakerCore) // 'Garden'
 *
 * @since 3.0.0
 */
export function department(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.commerce?.department,
      'commerce.department'
    )
  );
}
