import { createContext } from "react";
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

export const Usercontext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserContextProps) => {

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

    return (
        <Usercontext.Provider
            value={{ registerUser }}
        >
            {children}
        </Usercontext.Provider>
    );
};