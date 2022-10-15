export interface IFontSizes {
  [x: number]: string
}

const names: any = {
  1: 'xxs',
  2: 'xs',
  3: 'sm',
  4: 'md',
  5: 'lg',
  6: 'xl',
  7: '2xl',
  8: '3xl',
  9: '4xl',
  10: '5xl',
  11: '6xl',
  12: '7xl',
  13: '8xl',
  14: '9xl',
}

export function getFontSizes(sizes: number[]): IFontSizes {
  const sorted = sizes.sort((a: any, b: any) => a - b)

  const fontSizes = {} as IFontSizes

  for (let i = 0; i < sorted.length; i++) {
    fontSizes[names[i + 1]] = `${sorted[i]}px`
  }

  return fontSizes
}
