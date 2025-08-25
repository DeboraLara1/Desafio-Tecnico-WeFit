import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  background: ${colors.background.primary};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

export const SuccessContainer = styled.div`
  background: ${colors.background.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 12px ${colors.shadow.medium};
  padding: 3rem;
  text-align: center;
  max-width: 1200px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.text.primary};
  margin: 0 0 2rem 0;
`;

export const ContainerImagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
`;

export const ImageSuccess = styled.img`
  width: 260px;
  height: 320px;
`;

export const BackButton = styled.button`
  background: ${colors.primary.main};
  color: ${colors.text.white};
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: ${colors.primary.hover};
  }
`;
