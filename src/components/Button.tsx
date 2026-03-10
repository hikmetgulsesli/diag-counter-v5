import React from 'react';

interface ButtonProps {
  label?: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'icon';
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
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
      aria-label={ariaLabel}
    >
      {icon || label}
    </button>
  );
};
