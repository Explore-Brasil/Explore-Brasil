import { UserProvider } from './Usercontext';
import {StatesProvider} from "./Statescontext"

interface IUserContextProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IUserContextProps) => (
  <UserProvider>
    <StatesProvider>
    {children}
    </StatesProvider>
    </UserProvider>
);
