
import { useContext } from "react"
import { StatesContext } from "../../providers/Statescontext"
import { CreateComment } from "../createCommentComponent"
import StyledDivModal from "./styles"

interface ModalCreateCommentProps {
    stateId: number;
  }

const ModalCreateComment = ({ stateId } : ModalCreateCommentProps) => {
    const { setModalIsOpen } = useContext(StatesContext)

    return (
        <StyledDivModal>
            <div>
                <button type="button" className="btnClose" onClick={() => setModalIsOpen(false)}>X</button>

                <h2>Adicione informações sobre suas viagens, comentarios sobre lugares</h2>
                <p>Você é livre para compartilhar com a comunidade</p>
            </div>
            <div>
                <CreateComment statesId={stateId} />
            </div>
        </StyledDivModal>
    )
}

export default ModalCreateComment