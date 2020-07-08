import styled from "styled-components";

export const Container = styled.div`
  width: 1150px;
  min-height: 823px;
  position: relative;

  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);

  margin: 65px auto 0 auto;

  overflow: hidden;

  button {
    text-align: center;
    margin-top: 23px;
  }
`;

export const DivToggle = styled.div`
  button {
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: center;

    background: #f4f7fc;
    border-radius: 100px;

    margin-top: 12px;
    position: relative;

    width: 220px;
    height: 38px;
    border: 0;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

    div {
      border: 2px solid #ffffff;
      background-color: #ffffff;
      border-radius: 100px;
      width: 50%;
      padding: 7.6px 0;

      font-size: 13px;
      font-family: "Lato", serif;
      font-weight: bold;
    }

    .Active {
      border: 2px solid #00a6ce;
      background-color: #00a6ce;

      color: white;
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const ContentCard = styled.div`
  width: 390px;
  height: 550px;
  min-height: 100%;
  border-right: 1px solid #dddddd;

  margin-top: 28px;

  padding-left: 32px;
  padding-right: 16px;

  &:nth-last-of-type(1) {
    border: 0;
  }

  > p {
    color: #999999;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  h1 {
    color: #00a6ce;
    font-size: 32px;
    line-height: 36px;
    margin-top: 24px;
    font-weight: 600;
  }

  p {
    font-size: 13px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  margin-bottom: 12px;

  img {
    margin-right: 20px;
    margin-top: 30px;
  }
`;

export const InputRadio = styled.div`
  position: relative;
  border: 1px solid black;

  width: 310px;
  height: 38px;
  background: #f4f7fc;
  border-radius: 100px;

  border: 0;
  font-weight: bold;
  font-size: 26px;
  color: #4a507b;

  margin-top: 12px;
  margin-bottom: 32px;

  label {
    text-align: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: background 0.5s;
    font-size: 24px;
    border-radius: 100px;
  }

  input[type="radio"] {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }

  input[type="radio"]:checked + label,
  .Checked + label {
    background: #43b998;
    color: white;
  }
`;

export const InfoDiv = styled.div`
  img {
    margin-right: 10px;
  }
`;

export const HeaderOfFooter = styled.div`
  display: flex;
  margin-left: 12px;
  margin-bottom: 122px;

  align-content: center;
  align-items: center;

  div {
    margin: 0 24px;

    strong {
      font-weight: normal;
      font-size: 36px;
      color: #222222;
      font-weight: 500;
    }

    p {
      color: #00a6ce;
      font-size: 14px;
    }
  }

  div + div {
    display: flex;
    align-items: center;

    button {
      padding: 12px 2px;
      border: 0;
      background-color: transparent;

      img {
        margin-bottom: 8px;
      }
    }

    h1 {
      color: #00a6ce;
      margin: 12px 4px 0 4px;
      font-family: "Lato";
      font-weight: 500;
    }
  }
`;

// export const FooterContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   max-height: 120px;

//   position: absolute;
//   bottom: 0;
//   background-color: #00a6ce;

//   display: flex;
// `;

// export const FooterContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;

//   margin: 0 auto;

//   width: 95%;

//   h1,
//   p {
//     color: #ffffff;
//   }

//   p {
//     line-height: 22px;

//     color: #f5f5f5;
//   }

//   button {
//     width: 220px;
//     height: 46px;
//     border-radius: 100px;
//     background-color: #43b998;
//     border: 0;

//     color: #ffffff;
//     font-size: 22px;

//     margin-bottom: 12px;
//   }
// `;
