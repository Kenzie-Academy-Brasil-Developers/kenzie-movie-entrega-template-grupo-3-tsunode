import { useContext, useEffect } from 'react';
import { IMovies } from '../../Pages/HomePage/HomePage';
import { MovieContext } from '../../providers/MovieContext';
import { StyledUpperSection } from '../../Components/MoviesCard/MoviesCardStyle';
import { SmallYellowButton } from '../../styles/Buttons';
import { Paragraph, Title2 } from '../../styles/typography';
import { api } from '../../services/api';
import { Header } from '../../Components/Header/Header';

export const RenderPage = () => {
  const { setSelectMovie, selectMovie } = useContext(MovieContext) as {
    setSelectMovie: (movie: IMovies | null) => void;
    selectMovie: (movie: IMovies | null) => void;
  };
  useEffect(() => {
    const loadMovie = async () => {
      const movieId = localStorage.getItem('@LOCALMOVIEID');
      try {
        const { data } = await api.get(`/movies/${movieId}?_embed=reviews`);
        setSelectMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadMovie();
    setSelectMovie(null);
  }, []);

  console.log(selectMovie);

  const fetchReviews = async () => {
    const movieId = localStorage.getItem('@LOCALMOVIEID');
    try {
      const { data } = await api.get(`/movies/${movieId}?_embed=reviews`);

      const reviews = data.reviews.map((review: any) => {
        console.log(review.movieId);
        console.log(review.movieId);
        console.log(review.score);
        console.log(review.description)
        return {
          movieId: review.movieId,
          userId: review.userId,
          score:review.score,
          description:review.description
        }
      });
      console.log(reviews)
    } catch (error) {
      console.log(error)
    }
  };
  fetchReviews();

  return (
    <>
      {selectMovie == null ? (
        <div>loading</div>
      ) : 
        <div>
          <Header/>
          <img src={selectMovie.image} />
          <StyledUpperSection>
            <SmallYellowButton buttonSize={10}>
              {selectMovie.type}
            </SmallYellowButton>
            <Paragraph>{selectMovie.duration}</Paragraph>
          </StyledUpperSection>
          <StyledUpperSection>
            <Title2>{selectMovie.name}</Title2>
            <Paragraph>colocar o score</Paragraph>
          </StyledUpperSection>
          <Paragraph>{selectMovie.synopsis}</Paragraph>
          <div>
            <div>
              <Paragraph>Avaliações</Paragraph>
              <button>Avaliar</button>
            </div>
           {selectMovie.reviews.map((review, index) => (
              <div key={index}>
                <Paragraph>{review.movieId}</Paragraph>
                <Paragraph>{review.userId}</Paragraph>
                <Paragraph>{review.description}</Paragraph>
                <Paragraph>{review.score}</Paragraph>
              </div>
            )
           )}
          </div>
        </div>
        
      }
    </>
  );
};
