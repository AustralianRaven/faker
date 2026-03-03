import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random account name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * accountName(fakerCore) // 'Personal Loan Account'
 *
 * @since 2.0.1
 */
export function accountName(fakerCore: FakerCore): string {
  return [
    arrayElement(
      fakerCore,
      assertLocaleData(
        fakerCore.locale.finance?.account_type,
        'finance.account_type'
      )
    ),
    'Account',
  ].join(' ');
}
