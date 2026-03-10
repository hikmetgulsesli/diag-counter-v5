import { useState } from 'react'
import { Calculator, Settings, Plus, Minus } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  const reset = () => setCount(0)

  return (
    <div className="glass-card">
      <header className="header">
        <div className="header-left">
          <Calculator className="header-icon" />
          <h1 className="header-title">Counter App</h1>
        </div>
        <button aria-label="Settings" className="settings-button">
          <Settings />
        </button>
      </header>
      
      <div className="count-display">
        <span className="count-value">{count}</span>
      </div>
      
      <div className="button-group">
        <button 
          aria-label="Decrease" 
          className="icon-button" 
          onClick={decrement}
        >
          <Minus />
        </button>
        <button 
          className="reset-button" 
          onClick={reset}
        >
          Reset
        </button>
        <button 
          aria-label="Increase" 
          className="icon-button" 
          onClick={increment}
        >
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default App
