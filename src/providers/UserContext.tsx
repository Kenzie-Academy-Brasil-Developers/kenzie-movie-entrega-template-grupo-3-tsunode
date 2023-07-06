import { ReactNode, createContext } from "react";

export const UserContext = createContext({});

interface UserProviderProps {
    children: ReactNode;
}


export const UserProvider = ({ children }: UserProviderProps) => {
    
  
    return (
      <UserContext.Provider
        value={''}
      >
        {children}
      </UserContext.Provider>
    );
  };