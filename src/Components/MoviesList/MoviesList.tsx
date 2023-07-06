import { IMovies } from '../../Pages/HomePage/HomePage';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { StyledList, StyledListSection } from './MoviesList';

interface IMoviesProps {
  moviesList: IMovies[];
}
export const MoviesList = ({ moviesList }: IMoviesProps) => {
  return (
    <StyledListSection>
      <StyledList>
        {moviesList.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </StyledList>
    </StyledListSection>
  );
};
