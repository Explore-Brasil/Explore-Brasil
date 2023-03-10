import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

interface IUserContext {
  registerUser: (regiterData: IRegisterData) => Promise<void>;
  loginUser: (loginData: ILoginUserData) => Promise<void>;
  logOut: () => void;
  loginPage: () => void;
  registerPage: () => void;
  mainPage: () => void;
  user: IUser | undefined;
  getUserName: () => Promise<string | undefined>;
}

interface IUserContextProps {
  children: React.ReactNode;
}

interface IRegisterData {
  email: string;
  password: string;
  name: string;
  passwordConfirmation?: string;
}

export interface ILoginUserData {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  id: number;
  name: string;
}

export const Usercontext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUser>();

  const navigate = useNavigate();

  const registerUser = async (regiterData: IRegisterData) => {
    delete regiterData.passwordConfirmation;
    try {
      const response = await api.post("/users", regiterData);
      console.log("usuario cadastrado ~trocar por toast");
      localStorage.setItem("@USER", response.data.user.name);
      toast.success("Usuario criado com sucesso")
      navigate("/login");
    } catch (error) {
      toast.error('email já existente')
    }
  };

  const loginUser = async (loginData: ILoginUserData) => {
    try {
      const response = await api.post("/login", loginData);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@ID", response.data.user.id);
      setUser(response.data.user);
      toast.success("Bem vindo")
      navigate("/dashboard");
    } catch (error) {
      toast("email ou senha invalidos")
    }
  };

  const loginPage = () => {
    navigate("/login");
  };

  const registerPage = () => {
    navigate("/register");
  };
  const mainPage = () => {
    navigate("/");
  };
  const logOut = () => {
    localStorage.clear();
    toast.success("Usuario deslogado")
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN')
    if (!token) {
      navigate('/')
    }
    if (token) {
      navigate("/dashboard")
    }
  }, [])

  const getUserName = async (): Promise<string | undefined> => {
    const userId = localStorage.getItem("@ID");
    const allUsers = await api.get<Array<IUser>>("/users");
    const selectedUser = allUsers.data.find(
      (user) => user.id === parseInt(userId!)
    );

    return selectedUser?.name;
  };

  return (
    <Usercontext.Provider
      value={{
        registerUser,
        loginUser,
        logOut,
        loginPage,
        registerPage,
        mainPage,
        user,
        getUserName
      }}
    >
      {children}
    </Usercontext.Provider>
  );
};
