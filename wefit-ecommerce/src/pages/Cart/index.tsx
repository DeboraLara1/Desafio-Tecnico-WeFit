import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import EmptyCart from "../../components/EmptyCart";
import CartTable from "../../components/CartTable";
import Button from "../../components/Button";
import {
  Container,
  CartContainer,
  CartItems,
  BottomSection,
  TotalSection,
  TotalText,
  TotalValue,
} from "./styles";

const Cart: React.FC = () => {
  const { items, removeFromCart, total, clearCart, addToCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (movieId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(movieId);
      return;
    }

    const currentItem = items.find((item: any) => item.movie.id === movieId);
    if (!currentItem) return;

    const quantityDiff = newQuantity - currentItem.quantity;

    if (quantityDiff > 0) {
      for (let i = 0; i < quantityDiff; i++) {
        addToCart(currentItem.movie);
      }
    } else if (quantityDiff < 0) {
      for (let i = 0; i < Math.abs(quantityDiff); i++) {
        removeFromCart(movieId);
      }
    }
  };

  const handleCheckout = () => {
    clearCart();
    navigate("/success");
  };

  const groupedItems = useMemo(() => 
    items.reduce((acc: typeof items, item: any) => {
      const existing = acc.find((group: any) => group.movie.id === item.movie.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, [] as typeof items),
    [items]
  );

  const hasManyItems = groupedItems.length > 3;

  if (items.length === 0) {
    return (
      <Container hasManyItems={false}>
        <CartContainer>
          <EmptyCart />
        </CartContainer>
      </Container>
    );
  }

  return (
    <Container hasManyItems={hasManyItems}>
      <CartContainer>        
        <CartItems>
          <CartTable
            items={groupedItems}
            onQuantityChange={handleQuantityChange}
            onRemove={removeFromCart}
          />
          
          <BottomSection>
            <Button
              onClick={handleCheckout}
              variant="primary"
              size="large"
            >
              FINALIZAR PEDIDO
            </Button>
            
            <TotalSection>
              <TotalText>TOTAL</TotalText>
              <TotalValue>R$ {total.toFixed(2)}</TotalValue>
            </TotalSection>
          </BottomSection>
        </CartItems>
      </CartContainer>
    </Container>
  );
};

export default Cart;
