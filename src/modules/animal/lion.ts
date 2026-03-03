import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random lion species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * lion(fakerCore) // 'Northeast Congo Lion'
 *
 * @since 5.5.0
 */
export function lion(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.animal?.lion, 'animal.lion')
  );
}
