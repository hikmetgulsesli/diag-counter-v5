import { useState, useCallback } from 'react';
import './Counter.css';

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="counter">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-controls">
        <button 
          className="counter-button decrement" 
          onClick={decrement}
          aria-label="Decrease counter"
        >
          Decrement
        </button>
        <button 
          className="counter-button reset" 
          onClick={reset}
          aria-label="Reset counter"
        >
          Reset
        </button>
        <button 
          className="counter-button increment" 
          onClick={increment}
          aria-label="Increase counter"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
