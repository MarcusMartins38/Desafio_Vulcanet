import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 120px;

  position: absolute;
  bottom: 0;
  background-color: #00a6ce;

  display: flex;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  margin: 0 auto;

  width: 95%;

  h1,
  p {
    color: #ffffff;
  }

  p {
    line-height: 22px;

    color: #f5f5f5;
  }

  button {
    width: 220px;
    height: 46px;
    border-radius: 100px;
    background-color: #43b998;
    border: 0;

    color: #ffffff;
    font-size: 22px;

    margin-bottom: 12px;
  }
`;
