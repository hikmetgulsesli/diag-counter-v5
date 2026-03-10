import React from 'react';

export interface ButtonProps {
  label?: string;
  onClick: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'icon';
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  onKeyDown,
  variant = 'primary', 
  icon,
  ariaLabel 
}) => {
  const baseClass = variant === 'icon' ? 'btn-icon' : 'btn';
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  
  return (
    <button
      className={`${baseClass} ${variantClass}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
    >
      {icon || label}
    </button>
  );
};

interface IconButtonProps {
  onClick: () => void;
  ariaLabel: string;
  icon: React.ReactNode;
}

export const IncrementButton: React.FC<IconButtonProps> = ({ onClick, ariaLabel, icon }) => (
  <Button variant="icon" onClick={onClick} ariaLabel={ariaLabel} icon={icon} />
);

export const DecrementButton: React.FC<IconButtonProps> = ({ onClick, ariaLabel, icon }) => (
  <Button variant="icon" onClick={onClick} ariaLabel={ariaLabel} icon={icon} />
);

interface ResetButtonProps {
  onClick: () => void;
  ariaLabel: string;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onClick, ariaLabel }) => (
  <Button variant="secondary" onClick={onClick} ariaLabel={ariaLabel} label="Reset" />
);

// Counter component - displays the current count value
interface CounterProps {
  value: number;
}

export const Counter: React.FC<CounterProps> = ({ value }) => {
  return (
    <div className="counter">
      <div className="counter-display">
        <span className="counter-value" role="status" aria-live="polite" aria-atomic="true">{value}</span>
      </div>
    </div>
  );
};
