import { useState, useCallback } from 'react'
import { IncrementButton, DecrementButton, ResetButton, Counter } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(0)

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }, [])

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-title">
          <span className="material-symbols-outlined app-icon">calculate</span>
          <h1>Counter</h1>
        </div>
      </header>
      
      <div className="counter-section">
        <Counter value={count} />
      </div>

      <div className="button-group" role="group" aria-label="Counter controls">
        <DecrementButton onClick={decrement} onKeyDown={(e) => handleKeyDown(e, decrement)} ariaLabel="Decrease count by 1" icon={<span className="btn-icon-text">−</span>} />
        <ResetButton onClick={reset} onKeyDown={(e) => handleKeyDown(e, reset)} ariaLabel="Reset counter to zero" />
        <IncrementButton onClick={increment} onKeyDown={(e) => handleKeyDown(e, increment)} ariaLabel="Increase count by 1" icon={<span className="btn-icon-text">+</span>} />
      </div>
    </div>
  )
}

export default App
