import { ReactNode, createContext } from "react";

export const ReviewContext = createContext({});

interface ReviewProviderProps {
    children: ReactNode;
}

export const ReviewProvider = ({ children }: ReviewProviderProps) => {
    
  
    return (
      <ReviewContext.Provider
        value={''}
      >
        {children}
      </ReviewContext.Provider>
    );
  };