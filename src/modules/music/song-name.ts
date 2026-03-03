import type { FakerCore } from '../../core';
import { assertLocaleData } from '../../internal/locale-proxy';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random song name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * songName(fakerCore) // 'White Christmas'
 *
 * @since 7.1.0
 */
export function songName(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    assertLocaleData(fakerCore.locale.music?.song_name, 'music.song_name')
  );
}
