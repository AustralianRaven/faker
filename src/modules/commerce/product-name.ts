import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';
import { product } from './product';
import { productAdjective } from './product-adjective';
import { productMaterial } from './product-material';

/**
 * Generates a random descriptive product name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productName(fakerCore) // 'Incredible Soft Gloves'
 *
 * @since 3.0.0
 */
export function productName(fakerCore: FakerCore): string {
  const patterns = assertLocaleData(
    fakerCore.locale.commerce?.product_name,
    'commerce.product_name'
  ).pattern;
  return fake(fakerCore, patterns, [
    { commerce: { productAdjective, productMaterial, product } },
    fakerCore.locale,
  ]);
}
