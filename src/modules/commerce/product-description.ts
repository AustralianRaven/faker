import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { catchPhrase } from '../company/catch-phrase';
import { name } from '../company/name';
import { fake } from '../helpers/fake';
import { int } from '../number/int';
import { firstName } from '../person/first-name';
import { lastName } from '../person/last-name';
import { product } from './product';
import { productAdjective } from './product-adjective';
import { productMaterial } from './product-material';

/**
 * Returns a product description.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productDescription(fakerCore) // 'Featuring Phosphorus-enhanced technology, our Fish offers unparalleled Modern performance'
 *
 * @since 5.0.0
 */
export function productDescription(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.commerce?.product_description,
      'commerce.product_description'
    ),
    [
      {
        commerce: { product, productMaterial, productAdjective },
        company: { catchPhrase, name },
        number: { int },
        person: { firstName, lastName },
      },
      fakerCore.locale,
    ]
  );
}
