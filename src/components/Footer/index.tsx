import React from "react";

import { FooterContainer, FooterContent } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h1>Total: R$380/mês</h1>
          <p>Plano selecionado: Plano 1.0 - Mensal</p>
        </div>

        <button>Contratar</button>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
