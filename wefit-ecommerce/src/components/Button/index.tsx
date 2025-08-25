import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button'
}) => {
  return (
    <ButtonContainer
      onClick={onClick}
      $variant={variant}
      $size={size}
      disabled={disabled}
      type={type}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
