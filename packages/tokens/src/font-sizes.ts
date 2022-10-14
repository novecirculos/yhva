import {
  FontHeading2xl,
  FontHeadingXl,
  FontHeadingLg,
  FontHeadingMd,
  FontHeadingXs,
  FontHeadingSm,
  FontSubtitleLg,
  FontSubtitleMd,
  FontTextMd,
  FontTextSm,
} from '../build/js'
import { pxToRem } from '../utils/pxToRem'
import { getFontSizes } from '../utils/getFontSizes'

export const heading = {
  '2xl': pxToRem(FontHeading2xl.fontSize),
  xl: pxToRem(FontHeadingXl.fontSize),
  lg: pxToRem(FontHeadingLg.fontSize),
  md: pxToRem(FontHeadingMd.fontSize),
  xs: pxToRem(FontHeadingXs.fontSize),
  sm: pxToRem(FontHeadingSm.fontSize),
} as const

export const subtitle = {
  lg: pxToRem(FontSubtitleLg.fontSize),
  md: pxToRem(FontSubtitleMd.fontSize),
} as const

export const text = {
  md: pxToRem(FontTextMd.fontSize),
  sm: pxToRem(FontTextSm.fontSize),
} as const

const uniqueSizes = new Set([
  ...Object.values(heading),
  ...Object.values(subtitle),
  ...Object.values(text),
])

export const fontSizes = getFontSizes(
  Array.from(uniqueSizes).sort((a: any, b: any) => a - b),
)
