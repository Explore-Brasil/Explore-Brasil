import styled from "@emotion/styled";

const StyledUl = styled.ul`
  * {
    font-family: "Montserrat", sans-serif;
  }
  list-style: none;
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);

    .info__wrapper {
      min-height: 290px;
    }
  }

  @media (min-width: 1200px) {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    padding-bottom: 10px;
    padding-right: 10px;
    margin-right: -10px;

    li {
      min-width: 300px;
    }
  }

  @media (max-width: 375px) {
    li {
      min-width: 250px;
    }
  }

  li {
    margin-bottom: 30px;
    background-color: aquamarine;
    margin-right: 10px;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.4);

    .img__wrapper {
      img {
        max-height: 224px;
        width: 420px;
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 10px 10px 0 0;
      }
    }

    .lower__wrapper {
      display: flex;
      flex-direction: column;
      padding: 15px;
    }

    .button__wrapper {
      max-width: 420px;
      display: flex;
      gap: 30px;
      padding: 15px;
      justify-content: space-around;

      button {
        background-color: #7b61ff;
        color: white;
        border-radius: 10px;
        border: none;
        width: 100%;
        padding: 5px 10px;
      }
    }
  }
`;

export default StyledUl;
