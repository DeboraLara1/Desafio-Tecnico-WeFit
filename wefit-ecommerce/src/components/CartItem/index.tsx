import React from 'react';
import { Movie } from '../../types';
import trashIcon from '../../assets/trash.png';
import QuantityControl from '../QuantityControl';
import {
  Container,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  QuantityColumn,
  SubtotalColumn,
  RemoveButton,
  MobileSubtotal,
  MobileSubtotalLabel,
  MobileControlsRow
} from './styles';

interface CartItemProps {
  item: {
    movie: Movie;
    quantity: number;
  };
  onQuantityChange: (movieId: number, newQuantity: number) => void;
  onRemove: (movieId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
  onRemove
}) => {
  const { movie, quantity } = item;
  const subtotal = movie.price * quantity;

  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(movie.id, newQuantity);
  };

  const handleRemove = () => {
    onRemove(movie.id);
  };

  return (
    <Container>
      <ProductInfo>
        <ProductImage
          src={movie.image}
          alt={movie.title}
        />
        <ProductDetails>
          <ProductTitle>
            {movie.title}
            <RemoveButton className="mobile-only" onClick={handleRemove}>
              <img src={trashIcon} alt="Remover" />
            </RemoveButton>
          </ProductTitle>
          <ProductPrice>
            R$ {movie.price.toFixed(2)}
          </ProductPrice>
          <MobileControlsRow>
            <QuantityControl
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
            <MobileSubtotal>
              <MobileSubtotalLabel>SUBTOTAL</MobileSubtotalLabel>
              <span>R$ {subtotal.toFixed(2)}</span>
            </MobileSubtotal>
          </MobileControlsRow>
        </ProductDetails>
      </ProductInfo>

      <QuantityColumn>
        <QuantityControl
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
      </QuantityColumn>

      <SubtotalColumn>
        R$ {subtotal.toFixed(2)}
      </SubtotalColumn>
      <RemoveButton className="desktop-only" onClick={handleRemove}>
        <img src={trashIcon} alt="Remover" />
      </RemoveButton>
    </Container>
  );
};

export default CartItem;
