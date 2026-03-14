import { bigInt as numberBigInt } from './big-int';
import { binary as numberBinary } from './binary';
import { float as numberFloat } from './float';
import { hex as numberHex } from './hex';
import { int as numberInt } from './int';
import { octal as numberOctal } from './octal';
import { romanNumeral as numberRomanNumeral } from './roman-numeral';

export const numberModule = {
  bigInt: numberBigInt,
  binary: numberBinary,
  float: numberFloat,
  hex: numberHex,
  int: numberInt,
  octal: numberOctal,
  romanNumeral: numberRomanNumeral,
};
