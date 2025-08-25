import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.5rem;
    height: 100vh;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding: 1.5rem;
  color: ${colors.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 1rem;
    max-height: 95vh;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  margin: 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Illustration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    height: auto;
    max-width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
