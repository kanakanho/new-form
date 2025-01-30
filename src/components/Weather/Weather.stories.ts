import type { Meta, StoryObj } from '@storybook/react'
import Weather from './Weather'

const meta: Meta<typeof Weather> = {
  component: Weather,
}

export default meta
type Story = StoryObj<typeof Weather>

export const Primary: Story = {}
