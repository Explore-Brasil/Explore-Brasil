import { HeaderComponent } from "../../components/Header-Componet/Header-Component";
import AboutUs from "./AboutUs";
import Cards from "./Cards";
import { StyledMain } from "./styles";
import Title from "./Title";

const LandingPage = () => {
  return (
    <>
    <HeaderComponent/>
    <StyledMain>
      <Title />
      <AboutUs />
      <Cards />
    </StyledMain>
    </>
  );
};

export default LandingPage;
