import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(0)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  return (
    <main>
      <h1>Counter App</h1>
      <div className="card" role="region" aria-label="Counter display">
        <h2 id="counter-label">Count: <span role="status" aria-live="polite" aria-atomic="true">{count}</span></h2>
        <div className="button-group" role="group" aria-label="Counter controls">
          <button 
            onClick={decrement} 
            onKeyDown={(e) => handleKeyDown(e, decrement)}
            aria-label="Decrease counter by 1"
          >
            Decrement
          </button>
          <button 
            onClick={reset} 
            onKeyDown={(e) => handleKeyDown(e, reset)}
            aria-label="Reset counter to zero"
          >
            Reset
          </button>
          <button 
            onClick={increment} 
            onKeyDown={(e) => handleKeyDown(e, increment)}
            aria-label="Increase counter by 1"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
