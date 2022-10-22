import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$heading',
  backgroundColor: '$primary',
  padding: '$4',
  color: '$white',
  border: 0,

  variants: {
    variant: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    variant: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
