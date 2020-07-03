import React from "react";

import {
  Container,
  Content,
  ContentCard,
  TitleDiv,
  InfoDiv,
  HeaderOfFooter,
  FooterContainer,
  FooterContent,
} from "./styles";

import BallonChat from "../../assets/BallonChat.svg";
import Check from "../../assets/Check.svg";
import RightArrow from "../../assets/RightArrow.svg";
import LeftArrow from "../../assets/LeftArrow.svg";
// import Footer from "../../components/Footer";

const TelaPagamento: React.FC = () => {
  return (
    <Container>
      <button>TelaPagamento</button>

      <Content>
        <ContentCard>
          <TitleDiv>
            <img src={BallonChat} alt="BallonChat" />
            <h1>Plano 1.0</h1>
          </TitleDiv>

          <p>Perfeito para experimentar o peçaZap </p>

          <h1>R$150/mês</h1>

          <button>Selecionar</button>
          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>
        </ContentCard>

        <ContentCard>
          <TitleDiv>
            <img src={BallonChat} alt="BallonChat" />
            <h1>Plano 1.0</h1>
          </TitleDiv>

          <p>Perfeito para experimentar o peçaZap </p>

          <h1>R$150/mês</h1>

          <button>Selecionar</button>
          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>
        </ContentCard>

        <ContentCard>
          <TitleDiv>
            <img src={BallonChat} alt="BallonChat" />
            <h1>Plano 1.0</h1>
          </TitleDiv>

          <p>Perfeito para experimentar o peçaZap </p>

          <h1>R$150/mês</h1>

          <button>Selecionar</button>
          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>

          <InfoDiv>
            <img src={Check} alt="Check" />
            <p>Até 1000 clientes</p>
          </InfoDiv>
        </ContentCard>
      </Content>

      <HeaderOfFooter>
        <div>
          <strong>Atendentes</strong>
          <p>+R$130/mês por atendente</p>
        </div>

        <div>
          <button>
            <img src={LeftArrow} alt="LeftArrow" />
          </button>
          <h1>4</h1>
          <button>
            <img src={RightArrow} alt="RightArrow" />
          </button>
        </div>
      </HeaderOfFooter>

      <FooterContainer>
        <FooterContent>
          <div>
            <h1>Total: R$380/mês</h1>
            <p>Plano selecionado: Plano 1.0 - Mensal</p>
          </div>

          <button>Contratar</button>
        </FooterContent>
      </FooterContainer>
    </Container>
  );
};

export default TelaPagamento;
