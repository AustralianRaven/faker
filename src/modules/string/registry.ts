import { alpha as stringAlpha } from './alpha';
import { alphanumeric as stringAlphanumeric } from './alphanumeric';
import { binary as stringBinary } from './binary';
import { fromCharacters as stringFromCharacters } from './from-characters';
import { hexadecimal as stringHexadecimal } from './hexadecimal';
import { nanoid as stringNanoid } from './nanoid';
import { numeric as stringNumeric } from './numeric';
import { octal as stringOctal } from './octal';
import { sample as stringSample } from './sample';
import { symbol as stringSymbol } from './symbol';
import { ulid as stringUlid } from './ulid';
import { uuid as stringUuid } from './uuid';

export const stringModule = {
  alpha: stringAlpha,
  alphanumeric: stringAlphanumeric,
  binary: stringBinary,
  fromCharacters: stringFromCharacters,
  hexadecimal: stringHexadecimal,
  nanoid: stringNanoid,
  numeric: stringNumeric,
  octal: stringOctal,
  sample: stringSample,
  symbol: stringSymbol,
  ulid: stringUlid,
  uuid: stringUuid,
};
