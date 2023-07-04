import { IMovies } from '../../Pages/HomePage/HomePage';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { StyledList, StyledListSection } from './MoviesList';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


interface IMoviesProps {
  moviesList: IMovies[];
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
}
export const MoviesList = ({ moviesList, setCurrentMovie }: IMoviesProps) => {
  const navigate = useNavigate()


  const handleNewPage = (movie) => {
    setSelectMovie(movie)
    navigate('/renderPage')
    console.log(selectMovie)
  }
  const [selectMovie, setSelectMovie] = useState(null) // colocar ele no Context 

  console.log(selectMovie)
  return (
    <StyledListSection>
      {moviesList.map((movie ) => {
        return (
          <StyledList onClick={() => handleNewPage(movie)}>
          
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

