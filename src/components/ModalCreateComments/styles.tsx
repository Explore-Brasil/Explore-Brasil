import styled from "styled-components";

const StyledDivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;

  & > div {
    position: relative;
    background-color: white;
    padding: 20px;
    max-width: 600px;
    width: 90%;
    border-radius: 4px;
  }

  & h2 {
    font-size: 20px;
    margin-bottom: 16px;
    color : #02C39A;
    text-align: center;
  }

  & p {
    font-size: 16px;
    margin-bottom: 24px;
    text-align: center;
  }

  & button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    font-size: 24px;
    color: #666;
    cursor: pointer;
    transition: 0.5s;
  }
  & .btnClose:hover {
    color: red;
    transform: rotate(180deg);
  }
`;

export default StyledDivModal;