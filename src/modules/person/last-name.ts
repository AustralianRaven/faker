import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';
import { fake } from '../helpers/fake';
import { weightedArrayElement } from '../helpers/weighted-array-element';
import { selectDefinition } from './_select-definition';
import type { SexType } from './sex-type';

/**
 * Returns a random last name.
 *
 * @param fakerCore The FakerCore to use.
 * @param sex The optional sex to use.
 * Can be either `'female'` or `'male'`.
 *
 * @example
 * lastName(fakerCore) // 'Hauck'
 * lastName(fakerCore, 'female') // 'Grady'
 * lastName(fakerCore, 'male') // 'Barton'
 *
 * @since 8.0.0
 */
export function lastName(fakerCore: FakerCore, sex?: SexType): string {
  const patterns = fakerCore.locale.person?.last_name_pattern;
  if (patterns != null) {
    const pattern = weightedArrayElement(
      fakerCore,
      selectDefinition(fakerCore, sex, patterns)
    );
    return fake(fakerCore, pattern);
  }

  return arrayElement(
    fakerCore,
    selectDefinition(
      fakerCore,
      sex,
      assertLocaleData(fakerCore.locale.person?.last_name, 'person.last_name')
    )
  );
}
