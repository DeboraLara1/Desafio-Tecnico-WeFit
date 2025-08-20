import React from 'react';
import { Movie } from '../../types';
import { useCart } from '../../contexts/CartContext';
import CartIcon from '../../assets/Ico-cart.png';
import { Card, ContextImage, Image, Info, Title, Price, AddButton, ButtonContent, QuantityCounter } from './styles';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addToCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(movie.id);

  const handleAddToCart = () => {
    addToCart(movie);
  };

  return (
    <Card>
      <ContextImage>
      <Image src={movie.image} alt={movie.title} />
      </ContextImage>
      <Info>
        <Title>{movie.title}</Title>
        <Price>R$ {movie.price.toFixed(2)}</Price>
        <AddButton 
          onClick={handleAddToCart}
          $hasItems={quantity > 0}
        >
          <ButtonContent>
            <img src={CartIcon} alt="carrinho" />
            <QuantityCounter>{quantity}</QuantityCounter>
            ADICIONAR AO CARRINHO
          </ButtonContent>
        </AddButton>
      </Info>
    </Card>
  );
};

export default MovieCard;
