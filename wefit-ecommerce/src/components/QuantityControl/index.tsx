import React from 'react';
import minusIcon from '../../assets/icon-menos.png';
import plusIcon from '../../assets/icon-plus.png';
import {
  Container,
  QuantityButton,
  QuantityInput
} from './styles';

interface QuantityControlProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value) || min;
    const clampedQuantity = Math.max(min, Math.min(max, newQuantity));
    onQuantityChange(clampedQuantity);
  };

  return (
    <Container>
      <QuantityButton
        onClick={handleDecrease}
        disabled={quantity <= min}
      >
        <img src={minusIcon} alt="Diminuir quantidade" />
      </QuantityButton>
      
      <QuantityInput
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
      />
      
      <QuantityButton
        onClick={handleIncrease}
        disabled={quantity >= max}
      >
        <img src={plusIcon} alt="Aumentar quantidade" />
      </QuantityButton>
    </Container>
  );
};

export default QuantityControl;
