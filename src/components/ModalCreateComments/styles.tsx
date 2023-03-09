import styled from "styled-components";

const StyledDivModal = styled.div`
  background-color: rgba(114, 114, 114, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 400px;
    max-width: 90%;
    text-align: center;

    h2 {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 30px;
    }

    button {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 1.2rem;
      color: #333;
    }
  }
`;

export default StyledDivModal;