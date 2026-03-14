import { accountName as financeAccountName } from './account-name';
import { accountNumber as financeAccountNumber } from './account-number';
import { amount as financeAmount } from './amount';
import { bic as financeBic } from './bic';
import { bitcoinAddress as financeBitcoinAddress } from './bitcoin-address';
import { creditCardCVV as financeCreditCardCVV } from './credit-card-cvv';
import { creditCardIssuer as financeCreditCardIssuer } from './credit-card-issuer';
import { creditCardNumber as financeCreditCardNumber } from './credit-card-number';
import { currency as financeCurrency } from './currency';
import { currencyCode as financeCurrencyCode } from './currency-code';
import { currencyName as financeCurrencyName } from './currency-name';
import { currencyNumericCode as financeCurrencyNumericCode } from './currency-numeric-code';
import { currencySymbol as financeCurrencySymbol } from './currency-symbol';
import { ethereumAddress as financeEthereumAddress } from './ethereum-address';
import { iban as financeIban } from './iban';
import { litecoinAddress as financeLitecoinAddress } from './litecoin-address';
import { pin as financePin } from './pin';
import { routingNumber as financeRoutingNumber } from './routing-number';
import { transactionDescription as financeTransactionDescription } from './transaction-description';
import { transactionType as financeTransactionType } from './transaction-type';

export const financeModule = {
  accountName: financeAccountName,
  accountNumber: financeAccountNumber,
  amount: financeAmount,
  bic: financeBic,
  bitcoinAddress: financeBitcoinAddress,
  creditCardCVV: financeCreditCardCVV,
  creditCardIssuer: financeCreditCardIssuer,
  creditCardNumber: financeCreditCardNumber,
  currency: financeCurrency,
  currencyCode: financeCurrencyCode,
  currencyName: financeCurrencyName,
  currencyNumericCode: financeCurrencyNumericCode,
  currencySymbol: financeCurrencySymbol,
  ethereumAddress: financeEthereumAddress,
  iban: financeIban,
  litecoinAddress: financeLitecoinAddress,
  pin: financePin,
  routingNumber: financeRoutingNumber,
  transactionDescription: financeTransactionDescription,
  transactionType: financeTransactionType,
};
