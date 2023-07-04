import { IMovies } from '../../Pages/HomePage/HomePage';
import React from 'react';
import { StyledItem, StyledUpperSection } from './MoviesCardStyle';
import { SmallYellowButton } from '../../styles/Buttons';
import { Paragraph, Title2 } from '../../styles/typography';
import { Link } from 'react-router-dom';

interface IMoviesCardProps {
  movie: IMovies;
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
}

export const MoviesCard = ({ movie, setCurrentMovie }: IMoviesCardProps) => {
  return (
    <StyledItem>
      <Link to="/renderPage">
        <img src={movie.image} />
      </Link>

      <StyledUpperSection>
        <SmallYellowButton
          buttonSize={10}
          onClick={() => setCurrentMovie(movie)}
        >
          {movie.type}
        </SmallYellowButton>
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