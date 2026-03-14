import { arrayElement as helpersArrayElement } from './array-element';
import { arrayElements as helpersArrayElements } from './array-elements';
import { enumValue as helpersEnumValue } from './enum-value';
import { fake as helpersFake } from './fake';
import { fromRegExp as helpersFromRegExp } from './from-reg-exp';
import { maybe as helpersMaybe } from './maybe';
import { multiple as helpersMultiple } from './multiple';
import { mustache as helpersMustache } from './mustache';
import { objectEntry as helpersObjectEntry } from './object-entry';
import { objectKey as helpersObjectKey } from './object-key';
import { objectValue as helpersObjectValue } from './object-value';
import { rangeToNumber as helpersRangeToNumber } from './range-to-number';
import { replaceCreditCardSymbols as helpersReplaceCreditCardSymbols } from './replace-credit-card-symbols';
import { replaceSymbols as helpersReplaceSymbols } from './replace-symbols';
import { shuffle as helpersShuffle } from './shuffle';
import { slugify as helpersSlugify } from './slugify';
import { uniqueArray as helpersUniqueArray } from './unique-array';
import { weightedArrayElement as helpersWeightedArrayElement } from './weighted-array-element';

export const helpersModule = {
  arrayElement: helpersArrayElement,
  arrayElements: helpersArrayElements,
  enumValue: helpersEnumValue,
  fake: helpersFake,
  fromRegExp: helpersFromRegExp,
  maybe: helpersMaybe,
  multiple: helpersMultiple,
  mustache: helpersMustache,
  objectEntry: helpersObjectEntry,
  objectKey: helpersObjectKey,
  objectValue: helpersObjectValue,
  rangeToNumber: helpersRangeToNumber,
  replaceCreditCardSymbols: helpersReplaceCreditCardSymbols,
  replaceSymbols: helpersReplaceSymbols,
  shuffle: helpersShuffle,
  slugify: helpersSlugify,
  uniqueArray: helpersUniqueArray,
  weightedArrayElement: helpersWeightedArrayElement,
};
