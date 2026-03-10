import { useState } from 'react';
import { Counter } from './components/Counter';
import { DecrementButton } from './components/DecrementButton';
import { IncrementButton } from './components/IncrementButton';
import { ResetButton } from './components/ResetButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-title">
          <span className="material-symbols-outlined app-icon">calculate</span>
          <h1>Counter App</h1>
        </div>
        <button className="settings-btn" aria-label="Settings">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>
      <div className="counter-section">
        <Counter value={count} />
      </div>
      <div className="button-group">
        <DecrementButton onClick={decrement} />
        <ResetButton onClick={reset} />
        <IncrementButton onClick={increment} />
      </div>
    </div>
  );
}

export default App;
