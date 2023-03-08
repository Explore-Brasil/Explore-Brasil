import styled from "@emotion/styled";

export const StyledRegisterForm = styled.main`
  * {
    font-family: "Montserrat", sans-serif;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  flex-direction: column;

  .formBox {
    display: flex;
    flex-direction: column;
    border: #bdbdbd 1px solid;
    padding: 30px;
    border-radius: 10px;
  }

  .form__wrapper {
    display: flex;
    flex-direction: row;
    gap: 30px;
    img {
      @media (max-width: 700px) {
        display: none;
      }
      border-radius: 20px;
      height: 300px;
      width: 450px;
      align-self: center;
    }
  }

  button {
    background-color: #4ec4ae;
    color: white;
    border-radius: 10px;
    border: none;
    width: 100%;
    padding: 5px 10px;
  }

  button:hover {
    filter: brightness(1.1);
    transition: 0.2s;
  }
`;
