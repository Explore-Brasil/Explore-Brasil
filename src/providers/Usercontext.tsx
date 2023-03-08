import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import api from "../services/api";

interface IUserContext {
    registerUser: (regiterData: IRegisterData) => Promise<void>
}

interface IUserContextProps {
    children: React.ReactNode;
}

interface IRegisterData {
    email: string;
    password: string;
    name: string;
    passwordConfirmation? : string
}

interface IUsers {
    name: string
    email: string
    passwrdod: string
}

export const Usercontext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserContextProps) => {

    const [users, setusers] = useState(Array<IUsers>)

    const navigate = useNavigate()

    const registerUser = async (regiterData: IRegisterData) => {
        delete regiterData.passwordConfirmation
        try {
            await api.post("/users", regiterData)
            console.log('usuario cadastrado')
            navigate('/register')
        } catch (error) {
            console.log(error)
        }
    }

    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }

    useEffect(()=> {
        const token = localStorage.getItem('@TOKEN')
        if(!token){
            navigate('/')
        }
        if(token){
            navigate("/dashboard")
        }
    }, [])

    return (
        <Usercontext.Provider
            value={{ registerUser }}
        >
            {children}
        </Usercontext.Provider>
    );
};