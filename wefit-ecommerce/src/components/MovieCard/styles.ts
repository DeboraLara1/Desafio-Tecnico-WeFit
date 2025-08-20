import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 300px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const ContextImage = styled.div`
  display: flex;
  justify-content: center;
  height: 210px;
  align-items: center;
`;

export const Image = styled.img`
  width: 147px;
  height: 188px;
  object-fit: cover;
  display: block;
`;

export const Info = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  margin: 0 0 0.8rem 0;
  color: #2f2e41;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #2f2e41;
  margin-bottom: 1.5rem;
  margin: 0 0 1.5rem 0;
`;

export const AddButton = styled.button<{ $hasItems: boolean }>`
  width: 100%;
  background: ${(props) => (props.$hasItems ? "#039B00" : "#009edd")};
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => (props.$hasItems ? "#027a00" : "#0078a8")};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
  letter-spacing: 0.5px;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const QuantityCounter = styled.span`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  margin: 1px 0.5rem 0 0;
`;
