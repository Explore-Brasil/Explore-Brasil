import { useContext } from "react"
import { StatesContext } from "../../providers/Statescontext"

export const UsersComments = () => {

    const { comments, setModalIsOpen } = useContext(StatesContext)

    return (
        <>
            <span>Comentários de quem já foi</span>
            <button>X</button>
            {comments ? comments.map(e => {
                return (
                    <div className="userReviewContainer">
                        <div className="userReviewContainer--Header">
                            <h1>{e.title}</h1>
                            <span>Comentário de: {e.user}</span>
                            <span>Avaliação {e.avaliation}</span>
                        </div>
                        <div className="userReviewContainer--Body">
                            <span>{e.comment}</span>
                            <img src={e.img} alt="" />
                        </div>
                    </div>
                );
            }) : null}
        </>
    )
}
