import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  overflow: hidden;

  }
  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    font-family: 'Lato', serif;
  }
  body , button , input {
    font-size: 16px;
  }

 

  button {
    cursor: pointer;
  }

`;
