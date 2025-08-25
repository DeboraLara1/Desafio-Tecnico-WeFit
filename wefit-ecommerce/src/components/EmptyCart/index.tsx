import React from 'react';
import { useNavigate } from 'react-router-dom';
import reloadIcon from '../../assets/reload-page.png';
import Button from '../Button';
import {
  Container,
  Content,
  Title,
  Illustration,
  ButtonContainer
} from './styles';

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>
          Parece que não há nada por aqui :(
        </Title>

        <Illustration>
          <img
            src={reloadIcon}
            alt="Ilustração"
          />
        </Illustration>

        <ButtonContainer>
          <Button
            onClick={() => navigate("/")}
            variant="primary"
            size="small"
          >
            Voltar ao início
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default EmptyCart;
