import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$heading',
  backgroundColor: '$primary',
  padding: '$4',
  border: 0,
  color: '$white',

  variants: {
    variant: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    variant: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
