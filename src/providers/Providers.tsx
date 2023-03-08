import { UserProvider } from './Usercontext';

interface IUserContextProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IUserContextProps) => (
  <UserProvider>{children}</UserProvider>
);
