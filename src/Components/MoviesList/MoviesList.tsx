import { IMovies } from '../../Pages/HomePage/HomePage';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { StyledList, StyledListSection } from './MoviesList';
import { useState } from 'react';


interface IMoviesProps {
  moviesList: IMovies[];
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
}

export const MoviesList = ({ moviesList, setCurrentMovie }: IMoviesProps) => {
  const [selectMovie, setSelectMovie] = useState([]) // colocar ele no Context 
  console.log(selectMovie)
  return (
    <StyledListSection>
      {moviesList.map((movie ) => {
        return (
          <StyledList onClick={() => setSelectMovie(movie)}>
          
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

