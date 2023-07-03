import { IMovies } from '../../Pages/HomePage/HomePage';

import { MoviesCard } from '../MoviesCard/MoviesCard';

interface IMoviesProps {
  moviesList: IMovies[];
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
}

export const MoviesList = ({ moviesList, setCurrentMovie }: IMoviesProps) => {
  return (
    <div>
      {moviesList.map((movie) => {
        return (
          <ul>
            <MoviesCard
              key={movie.id}
              movie={movie}
              setCurrentMovie={setCurrentMovie}
            />
          </ul>
        );
      })}
    </div>
  );
};
