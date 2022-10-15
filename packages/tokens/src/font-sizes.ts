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
import { getFontSizes } from '../utils/getFontSizes'

export const heading = {
  '2xl': FontHeading2xl.fontSize,
  xl: FontHeadingXl.fontSize,
  lg: FontHeadingLg.fontSize,
  md: FontHeadingMd.fontSize,
  xs: FontHeadingXs.fontSize,
  sm: FontHeadingSm.fontSize,
} as const

export const subtitle = {
  lg: FontSubtitleLg.fontSize,
  md: FontSubtitleMd.fontSize,
} as const

export const text = {
  md: FontTextMd.fontSize,
  sm: FontTextSm.fontSize,
} as const

const uniqueSizes = new Set([
  ...Object.values(heading),
  ...Object.values(subtitle),
  ...Object.values(text),
])

const sizes = Array.from(uniqueSizes)

export const fontSizes = getFontSizes(sizes)
