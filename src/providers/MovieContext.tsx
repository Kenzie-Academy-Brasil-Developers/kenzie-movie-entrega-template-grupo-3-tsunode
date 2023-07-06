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

  const averageReview = () => {
    const reviews = selectMovie?.reviews.map((review) => {
      return review.score;
    });
    const sum = reviews?.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    const average = sum / reviews?.length;
    return average;
  };

  return (
    <MovieContext.Provider
      value={{ selectMovie, setSelectMovie, averageReview }}
    >
      {children}
    </MovieContext.Provider>
  );
};
