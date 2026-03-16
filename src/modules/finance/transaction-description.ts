import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { name } from '../company/name';
import { fake } from '../helpers/fake';
import { numeric } from '../string/numeric';
import { amount } from './amount';
import { currency } from './currency';
import { currencyCode } from './currency-code';
import { transactionType } from './transaction-type';

/**
 * Generates a random transaction description.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * transactionDescription(fakerCore)
 * // 'payment transaction at Emard LLC using card ending with ****9187 for HNL 506.57 in account ***2584.'
 *
 * @since 5.1.0
 */
export function transactionDescription(fakerCore: FakerCore): string {
  return fake(
    fakerCore,
    assertLocaleData(
      fakerCore.locale.finance?.transaction_description_pattern,
      'finance.transaction_description_pattern'
    ),
    [
      {
        company: { name },
        finance: { amount, currency, currencyCode, transactionType },
        string: { numeric },
      },
      fakerCore.locale,
    ]
  );
}
