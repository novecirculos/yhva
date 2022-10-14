import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  fontWeights,
  lineHeights,
  radii,
  space,
  fontSizes,
} from '@yhva/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontWeights,
    lineHeights,
    radii,
    space,
    fontSizes,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
