import { createContext } from "react";
import { useNavigate } from "react-router-dom"
import api from "../services/api";

interface IUserContext {
    registerUser: (regiterData: IRegisterData) => Promise<void>;
    loginUser: (loginData: ILoginUserData) => Promise<void>;
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

export interface ILoginUserData {
    email: string;
    password: string;
}




export const Usercontext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserContextProps) => {

    const navigate = useNavigate()

    const registerUser = async (regiterData: IRegisterData) => {
        delete regiterData.passwordConfirmation
        try {
            await api.post("/users", regiterData)
            console.log('usuario cadastrado ~trocar por toast')
            navigate('/register')
        } catch (error) {
            console.log(error, '~trocar por toast')
        }
    }

    const loginUser = async (loginData: ILoginUserData) => {
        console.log('chamou')
        try {
            const response = await api.post('/login', loginData)
            localStorage.setItem('@TOKEN', response.data.accessToken)
            localStorage.setItem('@ID', response.data.user.id)
            navigate('/dashboard')
            console.log('Logado com sucesso ~trocar por toast')
            
        } catch (error) {
            console.log('Não foi possivel logar-se ~trocar por toast')
            
        }
    }

    return (
        <Usercontext.Provider
            value={{ registerUser, loginUser }}
        >
            {children}
        </Usercontext.Provider>
    );
};