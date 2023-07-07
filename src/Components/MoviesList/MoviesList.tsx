import { useContext } from 'react';
import { IMovies } from '../../Pages/HomePage/HomePage';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { StyledList, StyledListSection } from './MoviesList';
import { MovieContext } from '../../providers/MovieContext';




export const MoviesList = () => {

  const { allMoviewsWithReview } = useContext(MovieContext)

  return (
    <StyledListSection>
      <StyledList>
        {allMoviewsWithReview.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </StyledList>
    </StyledListSection>
  );
};
