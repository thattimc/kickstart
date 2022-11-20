import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import About from '../../app/about/page'

test('about', () => {
  // Render the component
  render(<About />)
  // Find the heading
  const heading = screen.getByRole('heading', {
    name: /About/i,
  })
  // Assert that it renders the correct text
  expect(heading).toBeDefined()
})
