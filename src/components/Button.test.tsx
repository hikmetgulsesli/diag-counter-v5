import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button, IncrementButton, DecrementButton, ResetButton } from '../Button'

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    const { container } = render(<Button variant="primary">Primary</Button>)
    expect(container.firstChild).toHaveClass('btn-primary')
  })

  it('applies size classes', () => {
    const { container } = render(<Button size="lg">Large</Button>)
    expect(container.firstChild).toHaveClass('btn-lg')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('meets minimum touch target size', () => {
    render(<Button>Touch</Button>)
    const button = screen.getByRole('button')
    const styles = window.getComputedStyle(button)
    expect(parseFloat(styles.minWidth)).toBeGreaterThanOrEqual(44)
    expect(parseFloat(styles.minHeight)).toBeGreaterThanOrEqual(44)
  })
})

describe('IncrementButton', () => {
  it('renders with + label', () => {
    render(<IncrementButton />)
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
  })

  it('has primary variant', () => {
    const { container } = render(<IncrementButton />)
    expect(container.firstChild).toHaveClass('btn-primary')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<IncrementButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

describe('DecrementButton', () => {
  it('renders with - label', () => {
    render(<DecrementButton />)
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
  })

  it('has secondary variant', () => {
    const { container } = render(<DecrementButton />)
    expect(container.firstChild).toHaveClass('btn-secondary')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<DecrementButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

describe('ResetButton', () => {
  it('renders with Reset label', () => {
    render(<ResetButton />)
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument()
  })

  it('has danger variant', () => {
    const { container } = render(<ResetButton />)
    expect(container.firstChild).toHaveClass('btn-danger')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<ResetButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
