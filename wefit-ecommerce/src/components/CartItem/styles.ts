import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr auto;
  padding: 1.5rem 0;
  align-items: center;
  justify-items: start;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    position: relative;
    gap: 1rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    width: 100%;
    gap: 1rem;
    align-items: flex-start;
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px ${colors.shadow.light};

  @media (max-width: 700px) {
    width: 80px;
    height: 100px;
    flex-shrink: 0;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 700px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.text.primary};
  margin: 0;

  @media (max-width: 700px) {
    font-size: 1.1rem;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: ${colors.text.primary};
  margin: 0;
  font-weight: 500;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const QuantityColumn = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SubtotalColumn = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.text.primary};

  @media (max-width: 700px) {
    display: none;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
  justify-self: end;

  &:hover {
    background: ${colors.interaction.hover};
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 0.8;
  }

  &:hover img {
    opacity: 1;
  }

  &.desktop-only {
    @media (max-width: 700px) {
      display: none;
    }
  }

  &.mobile-only {
    display: none;

    @media (max-width: 700px) {
      display: block;
      padding: 0.25rem;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const MobileControlsRow = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const MobileSubtotal = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
  }
`;

export const MobileSubtotalLabel = styled.span`
  display: none;

  @media (max-width: 700px) {
    display: block;
    font-size: 0.7rem;
    color: ${colors.text.secondary};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;
