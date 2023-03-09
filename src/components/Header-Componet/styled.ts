import styled from "styled-components";

export const Header = styled.header`
  * {
    font-family: "Montserrat", sans-serif;
  }

  width: 100%;
  height: 250px;
  background-color: #4ec4ae;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    flex-direction: row;
    height: 150px;
    justify-content: space-between;
    align-items: baseline;
  }

  .imgLogo {
    width: 200px;
    height: 200px;

    @media (min-width: 769px) {
      margin-left: 15%;
    }

    img {
      width: 100%;
    }
  }
  .div-login-register {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: -95px;

    @media (min-width: 769px) {
      flex-direction: row;
      margin-right: 15%;
      gap: 40px;
      align-self: center;
      margin-top: 0;
    }

    button {
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
