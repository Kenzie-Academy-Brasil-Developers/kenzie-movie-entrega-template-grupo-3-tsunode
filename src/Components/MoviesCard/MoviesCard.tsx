import { IMovies } from '../../Pages/HomePage/HomePage';
import React, { useContext, useEffect, useState } from 'react';
import { StyledItem, StyledUpperSection } from './MoviesCardStyle';
import { SmallYellowButton } from '../../styles/Buttons';
import { Paragraph, Title2 } from '../../styles/typography';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../../providers/MovieContext';


interface IMoviesCardProps {
  movie: IMovies;
  
}

export const MoviesCard = ({ movie }: IMoviesCardProps) => {
  


  const navigate = useNavigate()

  return (
    <StyledItem>
      <img onClick={() => {localStorage.setItem('@LOCALMOVIEID',JSON.stringify(movie.id)), navigate('/renderPage')}} src={movie.image} />
      <StyledUpperSection>
        <SmallYellowButton buttonSize={10}>{movie.type}</SmallYellowButton>
        <Paragraph>{movie.duration}m</Paragraph>
      </StyledUpperSection>
      <StyledUpperSection>
        <Title2>{movie.name}</Title2>
        <Paragraph>colocar o score</Paragraph> 
      </StyledUpperSection>
    </StyledItem>
  );
};


// Linha 31 --> fazer a lógica do score (reduce)