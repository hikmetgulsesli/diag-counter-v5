import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders counter with initial value of 0', () => {
    render(<App />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders Counter App title', () => {
    render(<App />)
    expect(screen.getByText('Counter App')).toBeInTheDocument()
  })

  it('renders increment button with correct aria-label', () => {
    render(<App />)
    const incrementButton = screen.getByLabelText('Increase')
    expect(incrementButton).toBeInTheDocument()
  })

  it('renders decrement button with correct aria-label', () => {
    render(<App />)
    const decrementButton = screen.getByLabelText('Decrease')
    expect(decrementButton).toBeInTheDocument()
  })

  it('renders reset button', () => {
    render(<App />)
    const resetButton = screen.getByText('Reset')
    expect(resetButton).toBeInTheDocument()
  })

  it('renders settings button with correct aria-label', () => {
    render(<App />)
    const settingsButton = screen.getByLabelText('Settings')
    expect(settingsButton).toBeInTheDocument()
  })

  // State transition tests
  it('increments counter when increment button is clicked', () => {
    render(<App />)
    const incrementButton = screen.getByLabelText('Increase')
    
    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrements counter when decrement button is clicked', () => {
    render(<App />)
    const decrementButton = screen.getByLabelText('Decrease')
    
    fireEvent.click(decrementButton)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('resets counter to 0 when reset button is clicked', () => {
    render(<App />)
    const incrementButton = screen.getByLabelText('Increase')
    const resetButton = screen.getByText('Reset')
    
    // Increment a few times
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    expect(screen.getByText('3')).toBeInTheDocument()
    
    // Reset
    fireEvent.click(resetButton)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  // Edge case tests
  it('handles rapid clicking without debouncing issues', () => {
    render(<App />)
    const incrementButton = screen.getByLabelText('Increase')
    
    // Rapid clicks
    for (let i = 0; i < 50; i++) {
      fireEvent.click(incrementButton)
    }
    
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('handles negative values correctly', () => {
    render(<App />)
    const decrementButton = screen.getByLabelText('Decrease')
    
    // Click multiple times to go negative
    fireEvent.click(decrementButton)
    fireEvent.click(decrementButton)
    fireEvent.click(decrementButton)
    
    expect(screen.getByText('-3')).toBeInTheDocument()
  })

  it('updates UI immediately on state change', () => {
    render(<App />)
    const incrementButton = screen.getByLabelText('Increase')
    
    // Click and verify immediate update
    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('works after multiple increment-decrement cycles', () => {
    render(<App />)
    const incrementButton = screen.getByLabelText('Increase')
    const decrementButton = screen.getByLabelText('Decrease')
    
    // +5 -3 = 2
    for (let i = 0; i < 5; i++) fireEvent.click(incrementButton)
    expect(screen.getByText('5')).toBeInTheDocument()
    
    for (let i = 0; i < 3; i++) fireEvent.click(decrementButton)
    expect(screen.getByText('2')).toBeInTheDocument()
  })
})
