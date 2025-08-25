import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  background: ${colors.background.primary};
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    justify-items: center;
  }
`;

export const Error = styled.div`
  color: ${colors.text.white};
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem;
`;
