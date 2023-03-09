import { createContext, useEffect, useState } from "react";
import api from "../services/api";

interface IStatesContext {
    states: IStates[]
    createPost: (postData: IPosts) => Promise<void>
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    modalIsOpen: boolean

}

interface IStatesContextProps {
    children: React.ReactNode;
}

interface IStates {
    name: string
    id: number
    info: string
    img: string
}

interface IPosts {
    id?: string | undefined;
    user: string
    title: string
    comment: string
    img: string
    statesId: number
    avaliation: number
    userId: string 
}

interface IComments {
    title: string
    comment: string
    img: string
    statesId: number
    user: string
    avaliation: number
    userId: string
    id: string
}


export const StatesContext = createContext({} as IStatesContext)

export const StatesProvider = ({ children }: IStatesContextProps) => {

    const [states, setSates] = useState(Array<IStates>)
    const [posts, setPosts] = useState(Array<IPosts>)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [comments, setComments] = useState(Array<IComments>)

    useEffect(() => {
        const RenderStates = async () => {
            try {
                const resposnse = await api.get('/states')
                setSates(resposnse.data)
            } catch (error) {
            }
        }
        RenderStates()
    }, [])

    const createPost = async (postData: IPosts) => {
        const token = localStorage.getItem('@TOKEN')
        try {
            const response = await api.post('/comments', postData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPosts([...posts, response.data])
            console.log('comentário criado com sucesso ~inserir toast')
        } catch (error) {
            console.log(error)
        }
    }

    const renderAllPosts = async (stateId:number) => {
        console.log('chamou render all')
        console.log(stateId,typeof stateId, 'stateID é isso ai')
        try {
          const response = await api.get("/comments");
          const filteredComments = response.data.filter((comment: IComments) => comment.statesId === stateId);
          console.log(filteredComments)
          setComments(filteredComments);
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <StatesContext.Provider
            value={{ states, createPost, setModalIsOpen, modalIsOpen, comments, setComments, renderAllPosts }}
        >
            {children}

        </StatesContext.Provider>
    );
};