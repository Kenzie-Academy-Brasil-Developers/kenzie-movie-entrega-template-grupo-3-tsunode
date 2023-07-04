import { IMovies } from '../../Pages/HomePage/HomePage';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { StyledList, StyledListSection } from './MoviesList';

interface IMoviesProps {
  moviesList: IMovies[];
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
}

export const MoviesList = ({ moviesList, setCurrentMovie }: IMoviesProps) => {
  return (
    <StyledListSection>
      {moviesList.map((movie) => {
        return (
          <StyledList>
            <MoviesCard
              key={movie.id}
              movie={movie}
              setCurrentMovie={setCurrentMovie}
            />
          </StyledList>
        );
      })}
    </StyledListSection>
  );
};
