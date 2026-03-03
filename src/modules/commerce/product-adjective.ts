import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns an adjective describing a product.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productAdjective(fakerCore) // 'Handcrafted'
 *
 * @since 3.0.0
 */
export function productAdjective(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.commerce?.product_name,
      'commerce.product_name'
    ).adjective
  );
}
