import React from "react";
import { ToastContainer, toast } from "react-toastify";

import { FooterContainer, FooterContent } from "./styles";

interface FooterProps {
  toggleButton: boolean;
  pricesCalculated?: number;
}

const Footer: React.FC<FooterProps> = ({ toggleButton, pricesCalculated }) => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <div>
            <h1>Total: R${pricesCalculated}/mês</h1>
            <p>
              Plano selecionado: Turbo 1.0 -{" "}
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
  );
};

export default Footer;
