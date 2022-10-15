import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@yhva/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    variant: 'small',
  },
}
export const Big: StoryObj<ButtonProps> = {
  args: {
    variant: 'big',
  },
}
