import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';

/**
 * Generates a random localized street name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * street(fakerCore) // 'Schroeder Isle'
 *
 * @since 8.0.0
 */
export function street(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.location?.street_pattern,
      'location.street_pattern'
    )
  );
}
