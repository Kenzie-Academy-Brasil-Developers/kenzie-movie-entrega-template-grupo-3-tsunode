import { ReactNode, createContext, useState } from 'react';
import { IMovies } from '../Pages/HomePage/HomePage';

export const MovieContext = createContext({});

interface MovieProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [selectMovie, setSelectMovie] = useState<IMovies | null>(null);

  return (
    <MovieContext.Provider
      value={{ selectMovie, setSelectMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
