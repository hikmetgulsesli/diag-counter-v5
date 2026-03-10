import React from 'react';

interface CounterProps {
  value: number;
}

export const Counter: React.FC<CounterProps> = ({ value }) => {
  return (
    <div className="counter-display">
      <span className="counter-value">{value}</span>
    </div>
  );
};
