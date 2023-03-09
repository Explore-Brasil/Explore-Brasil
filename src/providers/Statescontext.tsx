import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../services/api";

interface IUserContext {

}

interface IUserContextProps {
    children: React.ReactNode;
}


interface IStates {
    name: string
    id: number
    info: string
    img: string
}


export const StatesContext = createContext({} as IUserContext)

export const StatesProvider = ({ children }: IUserContextProps) => {

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
            value={{ }}
        >
            {children}

        </StatesContext.Provider>
    );
};