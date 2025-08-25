import React from 'react';
import { Movie } from '../../types';
import CartItem from '../CartItem';
import {
  Container,
  TableHeader,
  HeaderColumn,
  ItemsContainer
} from './styles';

interface CartTableProps {
  items: Array<{
    movie: Movie;
    quantity: number;
  }>;
  onQuantityChange: (movieId: number, newQuantity: number) => void;
  onRemove: (movieId: number) => void;
}

const CartTable: React.FC<CartTableProps> = ({
  items,
  onQuantityChange,
  onRemove
}) => {
  return (
    <Container>
      <TableHeader>
        <HeaderColumn>PRODUTO</HeaderColumn>
        <HeaderColumn>QTD</HeaderColumn>
        <HeaderColumn>SUBTOTAL</HeaderColumn>
        <HeaderColumn></HeaderColumn>
      </TableHeader>

      <ItemsContainer>
        {items.map((item) => (
          <CartItem
            key={item.movie.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default CartTable;
