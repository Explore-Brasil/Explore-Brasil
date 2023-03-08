import styled from "@emotion/styled";
import bgImage from "../../assets/backgroundImageMain.png";
import cardImg1 from "../../assets/petropolisCard.png";
import cardImg2 from "../../assets/rioCard.png";
import cardImg3 from "../../assets/praiaCard.png";

export const StyledMain = styled.main`
  * {
    font-family: "Montserrat", sans-serif;
  }

  color: white;
  margin: 0;
  /* background-color: aliceblue; */

  .title__wrapper {
    background-image: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.5) 99%,
        #000000 100%
      ),
      url(${bgImage});
    align-self: center;
    height: 50rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    padding-left: 1rem;
    h1 {
      font-size: 2.5rem;
    }
    h4 {
      font-weight: 400;
      font-size: 0.9rem;
      margin-top: -15px;
    }
  }

  .aboutUs__wrapper {
    padding-left: 2rem;
    padding-top: 2rem;
    color: black;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;

    p {
      background-color: aquamarine;
      padding: 0.9rem;
      border-radius: 10px;
    }
  }

  .cards__wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    margin-bottom: 10rem;
    .inside__cardsWrapper {
      flex-direction: column;
      display: flex;
      gap: 3rem;
    }
  }

  .card1,
  .card2,
  .card3 {
    height: 288px;
    width: 17rem;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.4);

    p {
      background-color: aquamarine;
      width: 17rem;
      display: flex;
      justify-content: center;
      height: 2.75rem;
      padding-top: 0.75rem;
      border-radius: 0px 0px 10px 10px;
      position: relative;
      top: 21px;
    }
  }

  .card1 {
    background-image: url(${cardImg1});
  }
  .card2 {
    background-image: url(${cardImg2});
  }
  .card3 {
    background-image: url(${cardImg3});
  }

  @media (min-width: 425px) {
    /* background-color: aquamarine; */
    .title__wrapper {
      padding-left: 5rem;
    }
    .aboutUs__wrapper {
      align-items: center;
      padding-right: 2rem;
      padding-left: 3rem;
    }
  }

  @media (min-width: 700px) {
    .title__wrapper {
      padding-left: 10rem;
    }
  }

  @media (min-width: 900px) {
    .title__wrapper {
      padding-left: 17rem;
    }
    .aboutUs__wrapper {
      width: 90%;
    }
    .cards__wrapper {
      .inside__cardsWrapper {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
      }
    }
  }
  @media (min-width: 1000px) {
    .title__wrapper {
      align-items: center;
      padding-left: 0;
    }
  }
`;
