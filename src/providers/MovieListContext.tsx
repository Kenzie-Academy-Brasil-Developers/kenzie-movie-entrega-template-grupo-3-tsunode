/* import { createContext, useState } from 'react';

interface IMovies {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
}

interface IMovieListProviderProps {
  children: React.ReactNode;
}

interface IMovieListContext {
  moviesList: IMovies[];
  setMoviesList: React.Dispatch<React.SetStateAction<IMovies[]>>
}

export const MovieListContext = createContext({} as IMovieListContext);

export const MovieListProvider = ({ children }: IMovieListProviderProps) => {
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);

  return (
    <MovieListContext.Provider value={{ moviesList, setMoviesList }}>
      {children}
    </MovieListContext.Provider>
  );
};
 */
