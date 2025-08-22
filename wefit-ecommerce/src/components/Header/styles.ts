import styled from 'styled-components';

export const HeaderContainer = styled.header`
  color: white;
  padding: 1rem 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 1.8rem;
    font-weight: 20px;
    color: white;
    margin: 0;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.2rem;

    span:first-child {
      font-size: 14px;
      font-weight: 500;
      color: white;
      
      @media (max-width: 768px) {
        display: none;
      }
    }

    span:last-child {
      font-size: 12px;
      color: #999999;
      
      @media (min-width: 769px) {
        font-size: 14px;
      }
    }
  }
`;

export const CartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    filter: brightness(0) invert(1);
  }
`;

