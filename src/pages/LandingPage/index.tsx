import AboutUs from "./AboutUs";
import Cards from "./Cards";
import { StyledMain } from "./styles";
import Title from "./Title";

const LandingPage = () => {
  return (
    <StyledMain>
      <Title />
      <AboutUs />
      <Cards />
    </StyledMain>
  );
};

export default LandingPage;
