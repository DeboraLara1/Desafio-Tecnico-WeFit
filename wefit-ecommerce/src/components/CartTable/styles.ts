import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr;
  padding: 1rem 0;
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${colors.text.muted};
  font-size: 0.9rem;
  text-transform: uppercase;
  justify-items: start;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const HeaderColumn = styled.div`
  &:nth-child(1) {
    grid-column: 1;
  }
  
  &:nth-child(2) {
    grid-column: 2;
  }
  
  &:nth-child(3) {
    grid-column: 3;
  }
`;

export const ItemsContainer = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
