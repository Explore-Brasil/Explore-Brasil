import { useContext } from "react"
import { StatesContext } from "../../providers/Statescontext"


const StatesCard = () => {
    const { states } = useContext(StatesContext)
    return (
        <>
            {
                states.map((state) => <div>
                        <div>
                          <img src={state.img} alt={state.name} />  
                        </div>
                        <h2>{state.name}</h2>
                        <p>{state.info}</p>
                        <button>Adicionar comentario</button>
                        <button>Ver informações sobre {state.name}</button>
                    </div>
                )
            }

        </>
    )
}

export default StatesCard