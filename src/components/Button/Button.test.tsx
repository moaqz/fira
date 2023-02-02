import Button from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('Should render', () => {
    render(<Button>Button</Button>)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  test('Should be disabled', () => {
    const { getByTestId } = render(
      <Button disabled data-testid="btn">
        disabled Button
      </Button>
    )

    const btn = getByTestId('btn')
    expect(btn).toHaveAttribute('disabled')
  })
})
