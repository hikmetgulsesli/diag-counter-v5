import React from 'react';
import { Button } from './Button';

interface IncrementButtonProps {
  onClick: () => void;
}

export const IncrementButton: React.FC<IncrementButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="icon"
      ariaLabel="Increase"
      icon={<span className="material-symbols-outlined btn-icon-text">add</span>}
    />
  );
};
