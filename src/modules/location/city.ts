import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';
import { firstName } from '../person/first-name';
import { lastName } from '../person/last-name';

/**
 * Generates a random localized city name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * city(fakerCore) // 'East Jarretmouth'
 * fakerDE.location.city() // 'Bad Lilianadorf'
 *
 * @since 8.0.0
 */
export function city(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.location?.city_pattern,
      'location.city_pattern'
    ),
    [{ person: { firstName, lastName } }, fakerCore.locale]
  );
}
