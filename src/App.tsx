import { useState } from 'react'
import { IncrementButton, DecrementButton, ResetButton, Counter } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(0)

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

      <div className="button-group">
        <DecrementButton onClick={decrement} ariaLabel="Decrease count" icon={<span className="btn-icon-text">−</span>} />
        <ResetButton onClick={reset} ariaLabel="Reset counter" />
        <IncrementButton onClick={increment} ariaLabel="Increase count" icon={<span className="btn-icon-text">+</span>} />
      </div>
    </div>
  )
}

export default App
