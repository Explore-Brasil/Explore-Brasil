import { useContext, useState } from "react";
import { StatesContext } from "../../providers/Statescontext";
import StyledUl from "./styles";
import ModalCreateComment from "../ModalCreateComments"

const StatesCard = () => {
  const { states } = useContext(StatesContext);
  const {modalIsOpen, setModalIsOpen} = useContext(StatesContext)
  const [modalState, setModalState] = useState(null)

  const findstate = (event) => {
    const stateFound = states.find((state) => state.id === +event.target.id )
    console.log(stateFound, 'statefound')
    if(stateFound){
      setModalIsOpen(true)
      return
    } else {
      console.log('ola mundo')
    }
  }

  return (
      <>
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
              <button id={(state.id).toString()} type="button" onClick={(event)=> {
                console.log('chamou botão')
                setModalState(state.id)
                findstate(event)
                }}>Adicionar comentário</button>
              <button>Ver informações sobre {state.name}</button>
            </div>
          </div>
          
        </li>
      ))}
      {
            modalIsOpen && <ModalCreateComment stateId={modalState}/>
          }

          
    </StyledUl>
      </>
  );
};

export default StatesCard;
