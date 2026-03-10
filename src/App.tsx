import { useState, useCallback } from 'react'
import { Calculator, Settings } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
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
          <Calculator className="app-icon" />
          <h1>Counter</h1>
        </div>
        <button 
          aria-label="Settings" 
          className="settings-btn"
          onKeyDown={(e) => handleKeyDown(e, () => {})}
        >
          <Settings />
        </button>
      </header>
      
      <div className="counter-section">
        <div className="counter-display">
          <span className="counter-value" aria-live="polite">{count}</span>
        </div>
      </div>
      
      <div className="button-group" role="group" aria-label="Counter controls">
        <button 
          aria-label="Decrease count by 1" 
          className="btn btn-icon" 
          onClick={decrement}
          onKeyDown={(e) => handleKeyDown(e, decrement)}
        >
          <span className="btn-icon-text">−</span>
        </button>
        <button 
          className="btn btn-primary" 
          onClick={reset}
          onKeyDown={(e) => handleKeyDown(e, reset)}
          aria-label="Reset counter to zero"
        >
          Reset
        </button>
        <button 
          aria-label="Increase count by 1" 
          className="btn btn-icon" 
          onClick={increment}
          onKeyDown={(e) => handleKeyDown(e, increment)}
        >
          <span className="btn-icon-text">+</span>
        </button>
      </div>
    </div>
  )
}

export default App
