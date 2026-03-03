import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random food's ethnic category.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ethnicCategory(fakerCore) // 'Italian'
 *
 * @since 9.0.0
 */
export function ethnicCategory(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.food?.ethnic_category,
      'food.ethnic_category'
    )
  );
}
