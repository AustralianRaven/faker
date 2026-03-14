import { cmyk as colorCmyk } from './cmyk';
import { colorByCSSColorSpace as colorColorByCSSColorSpace } from './color-by-csscolor-space';
import { cssSupportedFunction as colorCssSupportedFunction } from './css-supported-function';
import { cssSupportedSpace as colorCssSupportedSpace } from './css-supported-space';
import { hsl as colorHsl } from './hsl';
import { human as colorHuman } from './human';
import { hwb as colorHwb } from './hwb';
import { lab as colorLab } from './lab';
import { lch as colorLch } from './lch';
import { rgb as colorRgb } from './rgb';
import { space as colorSpace } from './space';

export const colorModule = {
  cmyk: colorCmyk,
  colorByCSSColorSpace: colorColorByCSSColorSpace,
  cssSupportedFunction: colorCssSupportedFunction,
  cssSupportedSpace: colorCssSupportedSpace,
  hsl: colorHsl,
  human: colorHuman,
  hwb: colorHwb,
  lab: colorLab,
  lch: colorLch,
  rgb: colorRgb,
  space: colorSpace,
};
