import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import App from '../src/App'

it('should work as expected', () => {
  render(<App />)
  const linkElement = screen.getByText('Hello')
  expect(linkElement).toBeInTheDocument()
})
