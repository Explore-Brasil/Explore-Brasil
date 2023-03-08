import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../services/api";

interface IStatesContext {
    states: IStates[]
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


export const StatesContext = createContext({} as IStatesContext)

export const StatesProvider = ({ children }: IStatesContextProps) => {

    const [states, setSates] = useState(Array<IStates>)

    const navigate = useNavigate()

    useEffect(()=> {
        const RenderStates = async () => {
            try {
                const resposnse = await api.get('/states')
                setSates(resposnse.data)
                console.log(resposnse)
            } catch (error) {
            }
        }
        RenderStates()
    }, [])

    return (
        <StatesContext.Provider
            value={{states}}
        >
            {children}

        </StatesContext.Provider>
    );
};