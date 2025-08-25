import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${colors.background.secondary};
  padding: 0.15rem;
  border-radius: 4px;

  @media (max-width: 1200px) {
    gap: 0.3rem;
    padding: 0.2rem;
  }

  @media (max-width: 700px) {
    gap: 0.5rem;
    padding: 0.4rem;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    padding: 0.3rem;
  }
`;

export const QuantityButton = styled.button`
  width: 22px;
  height: 22px;
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
    width: 12px;
    height: 12px;
    transition: all 0.2s ease;
  }

  @media (max-width: 1200px) {
    img {
      width: 13px;
      height: 13px;
    }
  }

  @media (max-width: 700px) {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${colors.primary.main};

    img {
      width: 16px;
      height: 16px;
      filter: brightness(0) invert(1);
    }
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;

    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 22px;
  text-align: center;
  border-radius: 4px;
  font-size: 0.9rem;
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

  @media (max-width: 1200px) {
    width: 48px;
    height: 20px;
    font-size: 0.85rem;
  }

  @media (max-width: 700px) {
    width: 50px;
    height: 28px;
    background: ${colors.background.secondary};
    border: 1px solid ${colors.text.muted};
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 24px;
    font-size: 0.8rem;
  }
`;
