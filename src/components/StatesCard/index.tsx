import { useContext } from "react";
import { StatesContext } from "../../providers/Statescontext";
import StyledUl from "./styles";
import ModalCreateComment from "../ModalCreateComments"

const StatesCard = () => {
  const { states } = useContext(StatesContext);
  const {modalIsOpen, setModalIsOpen} = useContext(StatesContext)

  const findstate = (event) => {
    const stateFound = states.find((state) => state.id === +event.target.id )
    if(stateFound){
      setModalIsOpen(true)
    } else {
      console.log('ola mundo')
    }
  }

  return (
    <StyledUl>
      {states.map((state) => (
        <li key={state.id}>
          <div className="img__wrapper">
            <img src={state.img} alt={state.name} />
          </div>
          <div className="lower__wrapper">
            <div className="info__wrapper">
              <h2>{state.name}</h2>
              <p>{state.info}</p>
            </div>
            <div className="button__wrapper">
              <button id={(state.id).toString()} type="button" onClick={(event)=> findstate(event)}>Adicionar comentário</button>
              <button>Ver informações sobre {state.name}</button>
            </div>
          </div>
          {
            modalIsOpen &&
          <ModalCreateComment stateId={state.id}/>
          }
        </li>
      ))}
    </StyledUl>
  );
};

export default StatesCard;
