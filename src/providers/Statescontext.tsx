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

export const UserProvider = ({ children }: IUserContextProps) => {

    const [states, setSates] = useState(Array<IStates>)

    const navigate = useNavigate()

    return (
        <StatesContext.Provider
            value={{ }}
        >
            {children}

        </StatesContext.Provider>
    );
};