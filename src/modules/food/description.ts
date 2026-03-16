import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { fake } from '../helpers/fake';
import { int } from '../number/int';

/**
 * Generates a random dish description.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * description(fakerCore) // 'An exquisite ostrich roast, infused with the essence of longan, slow-roasted to bring out its natural flavors and served with a side of creamy red cabbage'
 *
 * @since 9.0.0
 */
export function description(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.food?.description_pattern,
      'food.description_pattern'
    ),
    [{ number: { int } }, fakerCore.locale]
  );
}
