export interface IFontSizes {
  [x: string]: string
}

export function getFontSizes(sizes: string[]): IFontSizes {
  const fontSizes = {} as IFontSizes

  for (let i = 0; i < sizes.length; i++) {
    fontSizes[i + 1] = sizes[i]
  }

  return fontSizes
}
