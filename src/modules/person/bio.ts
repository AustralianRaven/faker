import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';
import { emoji } from '../internet/emoji';

/**
 * Returns a random short biography
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * bio(fakerCore) // 'oatmeal advocate, veteran 🐠'
 *
 * @since 8.0.0
 */
export function bio(fakerCore: FakerCore): string {
  const pattern = assertLocaleData(
    fakerCore.locale.person?.bio_pattern,
    'person.bio_pattern'
  );

  return fake(fakerCore, pattern, [
    {
      internet: { emoji },
    },
    fakerCore.locale,
  ]);
}
