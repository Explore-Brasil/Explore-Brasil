import styled from "@emotion/styled";

export const StyledLoginForm = styled.main`
  * {
    font-family: "Montserrat", sans-serif;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  flex-direction: row;
  gap: 40px;

  form {
    display: flex;
    flex-direction: column;
    border: #bdbdbd 1px solid;
    padding: 30px;
    border-radius: 10px;
  }

  img {
    @media (max-width: 700px) {
      display: none;
    }
    border-radius: 20px;
    height: 300px;
    width: 450px;
    align-self: center;
  }

  .lowerPart {
    display: flex;
    flex-direction: column;
    gap: 7px;

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
  }
`;
