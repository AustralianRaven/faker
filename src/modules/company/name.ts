import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';
import { city } from '../location/city';
import { firstName } from '../person/first-name';
import { lastName } from '../person/last-name';

/**
 * Generates a random company name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * name(fakerCore) // 'Zieme, Hauck and McClure'
 *
 * @since 7.4.0
 */
export function name(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.company?.name_pattern,
      'company.name_pattern'
    ),
    [{ location: { city }, person: { firstName, lastName } }, fakerCore.locale]
  );
}
