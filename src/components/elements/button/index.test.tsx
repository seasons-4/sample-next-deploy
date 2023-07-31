import { render, screen } from '@testing-library/react'
import { StyledButton } from './index'

describe('StyledButton', () => {
  test('blue class', () => {
    render(<StyledButton color='blue'>hoge</StyledButton>)
    expect(screen.getByText('hoge')).toBeInTheDocument()
    expect(screen.getByText('hoge')).toHaveClass('bg-blue-200 hover:bg-blue-300')
  })

  test('yellow class', () => {
    render(<StyledButton color='yellow'>hoge</StyledButton>)
    expect(screen.getByText('hoge')).toBeInTheDocument()
    expect(screen.getByText('hoge')).toHaveClass('bg-yellow-200 hover:bg-yellow-100')
  })
})
