import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from '../../app/page'

test('home', () => {
  // Render the component
  render(<Home />)
  // Find the heading
  const heading = screen.getByRole('heading', {
    name: /Home/i,
  })
  // Assert that it renders the correct text
  expect(heading).toBeDefined()
})
