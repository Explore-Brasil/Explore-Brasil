import { useContext } from "react";
import { StatesContext } from "../../providers/Statescontext";
import StyledUl from "./styles";

const StatesCard = () => {
  const { states } = useContext(StatesContext);
  console.log(states);
  return (
    <StyledUl>
      {states.map((state) => (
        <li>
          <div className="img__wrapper">
            <img src={state.img} alt={state.name} />
          </div>
          <div className="lower__wrapper">
            <div className="info__wrapper">
              <h2>{state.name}</h2>
              <p>{state.info}</p>
            </div>
            <div className="button__wrapper">
              <button>Adicionar comentário</button>
              <button>Ver informações sobre {state.name}</button>
            </div>
          </div>
        </li>
      ))}
    </StyledUl>
  );
};

export default StatesCard;
