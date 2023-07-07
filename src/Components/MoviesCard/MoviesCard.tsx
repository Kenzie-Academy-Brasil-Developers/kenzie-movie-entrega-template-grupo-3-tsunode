import { IMovies } from '../../Pages/HomePage/HomePage';
import { StyledItem, StyledUpperSection } from './MoviesCardStyle';
import { SmallYellowButton } from '../../styles/Buttons';
import { Paragraph, Title2 } from '../../styles/typography';
import { useNavigate } from 'react-router-dom';

interface IMoviesCardProps {
  movie: IMovies;
}

export const MoviesCard = ({ movie }: IMoviesCardProps) => {
  const navigate = useNavigate();

  const sum = movie.reviews?.reduce((acc, cur) => {
    return acc + Number(cur.score);
  }, 0);

  const average = sum / movie.reviews?.length;

  return (
    <StyledItem>
      <img
        onClick={() => {
          localStorage.setItem('@LOCALMOVIEID', JSON.stringify(movie.id)),
            navigate('/renderPage');
        }}
        src={movie.image}
      />
      <StyledUpperSection>
        <SmallYellowButton buttonsize={10}>{movie.type}</SmallYellowButton>
        <Paragraph>{movie.duration}m</Paragraph>
      </StyledUpperSection>
      <StyledUpperSection>
        <Title2>{movie.name}</Title2>
        <Paragraph>{average}</Paragraph>
      </StyledUpperSection>
    </StyledItem>
  );
};

// Linha 31 --> fazer a lógica do score (reduce)
