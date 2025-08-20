import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../assets/Ico-cart.png';
import { useCart } from '../../contexts/CartContext';
import { HeaderContainer, Nav, CartIcon, CartInfo } from './styles';

const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <HeaderContainer>
      <Nav>
        <Link to="/">
          <h1>WeMovies</h1>
        </Link>
        <Link to="/cart">
          <CartInfo>
            <div>
              <span>Meu Carrinho</span>
              <span>{totalItems} itens</span>
            </div>
            <CartIcon>
              <img src={Cart} alt="icone de carrinho" />
            </CartIcon>
          </CartInfo>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
