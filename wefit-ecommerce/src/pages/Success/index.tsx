import React from "react";
import { useNavigate } from "react-router-dom";
import successImage from "../../assets/sucess-purchase.png";
import {
  Container,
  SuccessContainer,
  Title,
  ContainerImagem,
  ImageSuccess,
  BackButton,
} from "./styles";

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <SuccessContainer>
        <Title>Compra realizada com sucesso!</Title>
        <ContainerImagem>
          <ImageSuccess
            src={successImage}
            alt="Imagem referente ao sucesso na compra"
          />
        </ContainerImagem>

        <BackButton onClick={() => navigate("/")}>VOLTAR</BackButton>
      </SuccessContainer>
    </Container>
  );
};

export default Success;
