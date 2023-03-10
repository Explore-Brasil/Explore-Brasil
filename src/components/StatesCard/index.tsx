import { useContext, useState } from "react";
import { StatesContext } from "../../providers/Statescontext";
import StyledUl from "./styles";
import ModalCreateComment from "../ModalCreateComments"
import { UsersComments } from "../showComments";

interface IEventprops extends React.MouseEvent<HTMLInputElement, MouseEvent> {
  target: HTMLInputElement
}

const StatesCard = () => {
  const { states, renderAllPosts, commentsModalStatus } = useContext(StatesContext);
  const { modalIsOpen, setModalIsOpen } = useContext(StatesContext)
  const [modalState, setModalState] = useState(0)

  const findstate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const inputElement = event.target as HTMLInputElement;
    const stateFound = states.find((state) => state.id === +inputElement.id)
    if (stateFound) {
      setModalIsOpen(true);
      return;
    } else {
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
                <button id={(state.id).toString()} type="button" onClick={(event) => {
                  setModalState(state.id)
                  findstate(event)
                }}>Adicionar comentário</button>
                <button id={state.id.toString()} onClick={(event) => {
                  renderAllPosts(parseInt(event.currentTarget.id))
                }}>Ver informações sobre {state.name}</button>
              </div>
            </div>
          </li>
        ))}
        {
          modalIsOpen && <ModalCreateComment stateId={modalState} />

        }
        {commentsModalStatus ? <UsersComments /> : null}
      </StyledUl>
    </>
  );
};

export default StatesCard;
