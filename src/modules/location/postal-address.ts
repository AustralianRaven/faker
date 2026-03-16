import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';
import { city } from './city';
import { secondaryAddress } from './secondary-address';
import { state } from './state';
import { street } from './street';
import { streetAddress } from './street-address';
import { zipCode } from './zip-code';

/**
 * Generates a random localized full postal address, which may include a street address, secondary address, city, state, and zip code. To ensure you get locale-specific address formats, use a localized Faker instance.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * postalAddress(fakerCore)
 * // 'Apt. 980
 * // 0917 O'Conner Estates
 * // West Shannonview
 * // Michigan
 * // 82180'
 *
 * fakerEN_US.location.postalAddress()
 * // '0917 O'Conner Estates, Apt. 980
 * // West Shannonview, MI 82180'
 *
 * fakerEN_GB.location.postalAddress()
 * // '79 Bogan Corner
 * // Castle Zemlakborough
 * // Dumfries and Galloway
 * // ZH17 2SD'
 *
 * fakerZH_CN.location.postalAddress()
 * // '广东省贵原市门路19号'
 *
 * @since 10.5.0
 */
export function postalAddress(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.location?.postal_address,

      'location.postal_address'
    ),
    [
      {
        location: {
          city,
          secondaryAddress,
          state,
          street,
          streetAddress,
          zipCode,
        },
      },
      fakerCore.locale,
    ]
  );
}
