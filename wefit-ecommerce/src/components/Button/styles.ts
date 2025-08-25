import styled, { css } from 'styled-components';
import { colors } from '../../styles';

interface ButtonContainerProps {
  $variant: 'primary' | 'secondary';
  $size: 'small' | 'medium' | 'large';
}

const sizeStyles = {
  small: css`
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  `,
  medium: css`
    padding: 1rem 2rem;
    font-size: 1.1rem;
  `,
  large: css`
    padding: 0.875rem 1.75rem;
    font-size: 1.1rem;
  `
};

const variantStyles = {
  primary: css`
    background: ${colors.primary.main};
    color: ${colors.text.white};
    
    &:hover:not(:disabled) {
      background: ${colors.primary.hover};
    }
  `,
  secondary: css`
    background: transparent;
    color: ${colors.primary.main};
    border: 2px solid ${colors.primary.main};
    
    &:hover:not(:disabled) {
      background: ${colors.primary.main};
      color: ${colors.text.white};
    }
  `
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 6px;
  font-weight: 700;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 8px;
    background: ${colors.primary.main};
    color: ${colors.text.white};
    order: 2;
    
    &:hover:not(:disabled) {
      background: ${colors.primary.hover};
    }
  }
`;
