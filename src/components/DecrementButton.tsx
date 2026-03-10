import React from 'react';
import { Button } from './Button';

interface DecrementButtonProps {
  onClick: () => void;
}

export const DecrementButton: React.FC<DecrementButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="icon"
      ariaLabel="Decrease"
      icon={<span className="material-symbols-outlined btn-icon-text">remove</span>}
    />
  );
};
