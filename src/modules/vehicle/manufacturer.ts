import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a manufacturer name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * manufacturer(fakerCore) // 'Ford'
 *
 * @since 5.0.0
 */
export function manufacturer(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.vehicle?.manufacturer,
      'vehicle.manufacturer'
    )
  );
}
