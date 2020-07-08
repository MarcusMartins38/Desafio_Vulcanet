import React, { useState, useEffect, useCallback, useMemo } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  DivToggle,
  Content,
  ContentCard,
  TitleDiv,
  InputRadio,
  InfoDiv,
  HeaderOfFooter,
  FooterContainer,
  FooterContent,
} from "./styles";

import BallonChat from "../../assets/BallonChat.svg";
import Check from "../../assets/Check.svg";
import RightArrow from "../../assets/RightArrow.svg";
import LeftArrow from "../../assets/LeftArrow.svg";

import api from "../../services/api";

import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/core";

interface ApiProps {
  id: number;
  name: string;
  description: string;
  prices: {
    monthly: number;
    yearly: number;
  };
  features: string[];
}

const TelaPagamento: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [apiInfos, setApiInfos] = useState<ApiProps[]>([]);
  const [selectedOption, setSelectedOption] = useState<ApiProps>();

  const [countAtendentes, setCountAtendentes] = useState(0);

  const [toggleButton, setToggleButton] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top: 30%;
  `;

  useEffect(() => {
    setLoading(true);
    api.get("plans").then((response) => {
      setApiInfos(response.data);
      setSelectedOption(response.data[1]);
      setLoading(false);
    });
  }, []);

  const handleIncrementRightArrow = useCallback(() => {
    setCountAtendentes(countAtendentes + 1);
  }, [countAtendentes]);

  const handleDecrementLeftArrow = useCallback(() => {
    if (countAtendentes > 0) {
      setCountAtendentes(countAtendentes - 1);
    } else {
      return;
    }
  }, [countAtendentes]);

  const handleSelect = useCallback(
    (position: number) => {
      setSelectedOption(apiInfos[position - 1]);
    },
    [apiInfos]
  );

  const pricesCalculated = useMemo(() => {
    if (selectedOption === undefined) {
      return;
    }

    if (toggleButton === false) {
      const price = selectedOption?.prices.monthly + countAtendentes * 130;
      return price;
    } else {
      const price = selectedOption?.prices.yearly + countAtendentes * 130;
      return price;
    }
  }, [countAtendentes, selectedOption, toggleButton]);

  const handleToggleButton = useCallback(() => {
    if (toggleButton === false) {
      setToggleButton(true);
    } else {
      setToggleButton(false);
    }
  }, [toggleButton]);

  return (
    <Container>
      {loading ? (
        <div>
          <MoonLoader css={override} size={64} color={"#00A6CE"} />
        </div>
      ) : (
        <>
          <DivToggle>
            <button onClick={() => handleToggleButton()}>
              <div className={toggleButton === false ? "Active" : ""}>
                Mensal
              </div>
              <div className={toggleButton === true ? "Active" : ""}>Anual</div>
            </button>
          </DivToggle>

          <Content>
            {apiInfos.map((api) => (
              <ContentCard key={api.id}>
                <TitleDiv>
                  <img src={BallonChat} alt="BallonChat" />
                  <h1> {api.name}</h1>
                </TitleDiv>

                <p>{api.description}</p>

                <h1>
                  R$
                  {toggleButton === false
                    ? api.prices.monthly
                    : api.prices.yearly}
                  /mês
                </h1>

                <InputRadio className="divPai">
                  <input
                    type="radio"
                    name="option"
                    value="Selecionar"
                    onChange={() => handleSelect(api.id)}
                    defaultChecked={api.id === 2 ? true : false}
                  />
                  <label>Selecionar</label>
                </InputRadio>

                {api.features.map((feature) => (
                  <InfoDiv key={feature}>
                    <img src={Check} alt="Check" />
                    <p>{feature}</p>
                  </InfoDiv>
                ))}
              </ContentCard>
            ))}
          </Content>

          <HeaderOfFooter>
            <div>
              <strong>Atendentes</strong>
              <p>+R$130/mês por atendente</p>
            </div>

            <div>
              <button>
                <img
                  src={LeftArrow}
                  alt="LeftArrow"
                  onClick={handleDecrementLeftArrow}
                />
              </button>
              <h1>{countAtendentes}</h1>
              <button>
                <img
                  src={RightArrow}
                  alt="RightArrow"
                  onClick={handleIncrementRightArrow}
                />
              </button>
            </div>
          </HeaderOfFooter>

          <FooterContainer>
            <FooterContent>
              <div>
                <h1>Total: R${pricesCalculated}/mês</h1>
                <p>
                  Plano selecionado: {selectedOption?.name} -{" "}
                  {toggleButton === false ? "Mensal" : "Anual"}
                </p>
              </div>

              <button onClick={() => toast("Compra efetuada com sucesso!")}>
                Contratar
              </button>
            </FooterContent>
          </FooterContainer>
          <ToastContainer />
        </>
      )}
    </Container>
  );
};

export default TelaPagamento;
