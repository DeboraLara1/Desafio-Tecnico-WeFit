import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${colors.background.secondary};
  padding: 0.25rem;
  border-radius: 4px;

  @media (max-width: 700px) {
    gap: 0.75rem;
    padding: 0.5rem;
    border-radius: 6px;
  }
`;

export const QuantityButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${colors.background.secondary};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 700px) {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${colors.primary.main};
    
    img {
      width: 18px;
      height: 18px;
      filter: brightness(0) invert(1);
    }
  }
`;

export const QuantityInput = styled.input`
  width: 72px;
  height: 32px;
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text.primary};
  background: transparent;

  &:focus {
    outline: none;
    border-color: ${colors.primary.main};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 700px) {
    width: 60px;
    height: 32px;
    background: ${colors.background.secondary};
    border: 1px solid ${colors.text.muted};
    font-size: 0.95rem;
  }
`;
