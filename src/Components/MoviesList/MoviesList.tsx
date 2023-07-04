import { IMovies } from '../../Pages/HomePage/HomePage';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { StyledList, StyledListSection } from './MoviesList';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


interface IMoviesProps {
  moviesList: IMovies[];
}
export const MoviesList = ({ moviesList }: IMoviesProps) => {
  const navigate = useNavigate()


  // const handleNewPage = (movie) => {
  //   setSelectMovie(movie)
  //   navigate('/renderPage')
  //   console.log(selectMovie)
  // }
  // colocar ele no Context 

  return (
    <StyledListSection>
      <StyledList>
        {moviesList.map((movie) => <MoviesCard key={movie.id} movie={movie} />) }
      </StyledList>
    </StyledListSection>
  );
};

