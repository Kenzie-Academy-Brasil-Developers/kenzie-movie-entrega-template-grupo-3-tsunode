import { IMovies } from "../../Pages/HomePage/HomePage";
import React from "react";
import { StyledItem, StyledUpperSection } from "./MoviesCardStyle";
import { SmallYellowButton } from "../../styles/Buttons";
import { Paragraph, Title2 } from "../../styles/typography";

interface IMoviesCardProps {
  movie: IMovies;
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
}

export const MoviesCard = ({ movie, setCurrentMovie }: IMoviesCardProps) => {
  return (
    <StyledItem>
      <img id={movie.id.toString()} src={movie.image} />
      <StyledUpperSection>
        <SmallYellowButton buttonsize={10} onClick={() => setCurrentMovie(movie)}>{movie.type}</SmallYellowButton>
        <Paragraph>{movie.duration}m</Paragraph>
      </StyledUpperSection>
      <StyledUpperSection>
        <Title2>{movie.name}</Title2>
        <Paragraph>colocar o score</Paragraph>
      </StyledUpperSection>
    </StyledItem>
  );
};
