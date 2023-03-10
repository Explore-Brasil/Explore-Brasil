import { useContext, useState } from "react";
import { StatesContext } from "../../providers/Statescontext";
import StyledUl from "./styles";
import ModalCreateComment from "../ModalCreateComments"
import { UsersComments } from "../showComments";

interface IEventprops extends MouseEvent{
  target: HTMLInputElement
}

const StatesCard = () => {
  const { states, renderAllPosts, setCommentsModalStatus, commentsModalStatus } = useContext(StatesContext);
  const {modalIsOpen, setModalIsOpen} = useContext(StatesContext)
  const [modalState, setModalState] = useState(0)

  const findstate = (event: IEventprops) => {
    const stateFound = states.find((state) => state.id === +event.target.id )
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
              <button id={(parseInt(state.id))} onClick={(event) => {
                renderAllPosts(parseInt(event.target.id))
                console.log('click')
              }}>Ver informações sobre {state.name}</button>
            </div>
          </div>
          
        </li>
      ))}
      {
            modalIsOpen && <ModalCreateComment stateId={modalState}/>
          
<<<<<<< HEAD
          }    
=======
          }

          {commentsModalStatus ? <UsersComments /> : null}

          

          
>>>>>>> 871bc6ce9d4f479ae69022a623397e295915d9eb
    </StyledUl>
      </>
  );
};

export default StatesCard;
