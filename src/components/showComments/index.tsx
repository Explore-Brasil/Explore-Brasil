import { useContext } from "react"
import { Rating } from "react-simple-star-rating"
import { StatesContext } from "../../providers/Statescontext"
import { StyledCommentsDiv } from "./styles"

export const UsersComments = () => {

    const { comments, setCommentsModalStatus } = useContext(StatesContext)

    return (

        <StyledCommentsDiv>

            <div className="divContainer">
                <div className="userReviewNav">
                    <span>Comentários de quem já foi :</span>
                    <button onClick={() => setCommentsModalStatus(false)}>X</button>

                </div>

                {comments ? comments.map(e => {
                    return (
                        <div className="userReviewContainer">
                            <div className="userReviewContainer--Header">
                                <h1>{e.title}</h1>
                                <span className="nameComent">Comentário de: <b className="nameUser">{e.user}</b></span>
                                <span>Avaliação <Rating initialValue={e.avaliation} readonly={true} size={18} /></span>
                            </div>
                            <div className="userReviewContainer--Body">
                                <span>{e.comment}</span>
                                <img src={e.img} alt="" />
                            </div>
                        </div>
                    );
                }) : null}

                </div>

        </StyledCommentsDiv>
        
    )
}
