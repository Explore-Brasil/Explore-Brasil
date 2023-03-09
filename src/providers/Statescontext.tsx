import { createContext, useEffect, useState } from "react";
import api from "../services/api";

interface IStatesContext {
    states: IStates[]
    createPost: (postData: IPosts) => Promise<void>
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

interface IPosts{
    id: number
    user: string
    title: string
    comment: string
    img: string
    statesId: number
    avaliation: number
}


export const StatesContext = createContext({} as IStatesContext)

export const StatesProvider = ({ children }: IStatesContextProps) => {

    const [states, setSates] = useState(Array<IStates>)
    const [posts, setPosts] = useState(Array<IPosts>)

    useEffect(()=> {
        const RenderStates = async () => {
            try {
                const resposnse = await api.get('/states')
                setSates(resposnse.data)
            } catch (error) {
            }
        }
        RenderStates()
    }, [])

    const createPost = async (postData: IPosts)=> {
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

    


    return (
        <StatesContext.Provider
            value={{states, createPost}}
        >
            {children}

        </StatesContext.Provider>
    );
};