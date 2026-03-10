import { useState } from 'react'
import { Calculator } from 'lucide-react'
import { IncrementButton, DecrementButton, ResetButton } from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  const reset = () => setCount(0)

  return (
    <div className="app-container">
      <div className="glass-card">
        <header className="card-header">
          <Calculator size={32} className="icon" />
          <h1>Counter</h1>
        </header>
        
        <div className="counter-display">
          <span className="count-value">{count}</span>
        </div>

        <div className="button-group">
          <DecrementButton onClick={decrement} aria-label="Decrease count" />
          <ResetButton onClick={reset} aria-label="Reset counter" />
          <IncrementButton onClick={increment} aria-label="Increase count" />
        </div>
      </div>
    </div>
  )
}

export default App
