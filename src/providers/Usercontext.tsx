import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../services/api";

interface IUserContext {
    registerUser: (regiterData: IRegisterData) => Promise<void>;
    loginUser: (loginData: ILoginUserData) => Promise<void>;
    logOut: () => void
    loginPage: () => void
    registerPage: () => void
    mainPage: () => void

}

interface IUserContextProps {
    children: React.ReactNode;
}

interface IRegisterData {
    email: string;
    password: string;
    name: string;
    passwordConfirmation?: string
}

export interface ILoginUserData {
    email: string;
    password: string;
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
            console.log('usuario cadastrado ~trocar por toast')
            navigate('/login')
        } catch (error) {
            console.log(error, '~trocar por toast')
        }
    }

    const loginUser = async (loginData: ILoginUserData) => {
        try {
            const response = await api.post('/login', loginData)
            localStorage.setItem('@TOKEN', response.data.accessToken)
            localStorage.setItem('@ID', response.data.user.id)
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    const loginPage = () => {
        navigate('/login')
    }

    const registerPage = () => {
        navigate('/register')
    }
    const mainPage = () => {
        navigate('/')
    }
    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }

    // useEffect(() => {
    //     const token = localStorage.getItem('@TOKEN')
    //     if (!token) {
    //         navigate('/')
    //     }
    //     if(token) {
    //         navigate("/dashboard")
    //     }
    // }, [])

    return (
        <Usercontext.Provider
            value={{ registerUser, loginUser, logOut, loginPage, registerPage, mainPage }}
        >
            {children}

        </Usercontext.Provider>
    );
};