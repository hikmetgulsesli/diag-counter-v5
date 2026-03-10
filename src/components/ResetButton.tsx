import React from 'react';
import { Button } from './Button';

interface ResetButtonProps {
  onClick: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <Button
      label="Reset"
      onClick={onClick}
      variant="secondary"
    />
  );
};
