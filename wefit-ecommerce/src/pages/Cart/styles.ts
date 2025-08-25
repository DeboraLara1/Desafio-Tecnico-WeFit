import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div<{ hasManyItems: boolean }>`
  background: ${colors.background.primary};
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  overflow-y: ${({ hasManyItems }) => hasManyItems ? 'auto' : 'hidden'};

  @media (max-width: 700px) {
    padding: 0.5rem;
  }
`;

export const CartContainer = styled.div`
  background: ${colors.background.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 12px ${colors.shadow.medium};
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    border-radius: 12px;
    box-shadow: 0 2px 8px ${colors.shadow.medium};
    min-height: 95vh;
  }
`;

export const CartItems = styled.div`
  padding: 2rem;
  flex: 1;

  @media (max-width: 700px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid ${colors.text.muted};

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
    padding-top: 1.5rem;
    
    > * {
      order: 1;
    }
    
    > button {
      order: 2;
    }
  }
`;

export const TotalSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    justify-content: space-between;
    gap: 0.75rem;
    order: 1;
    padding: 0 0.5rem;
  }
`;

export const TotalText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text.secondary};
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 0.9rem;
    color: ${colors.text.muted};
  }
`;

export const TotalValue = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.text.primary};

  @media (max-width: 700px) {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${colors.text.primary};
  }
`;
