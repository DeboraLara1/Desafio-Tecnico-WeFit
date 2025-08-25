import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles';

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
    opacity: 0.8;
  }
  50% { 
    opacity: 1;
  }
  100% { 
    transform: rotate(360deg); 
    opacity: 0.8;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid ${colors.text.white};
  border-radius: 50%;
  animation: ${spin} 2s ease-in-out infinite;
`;
