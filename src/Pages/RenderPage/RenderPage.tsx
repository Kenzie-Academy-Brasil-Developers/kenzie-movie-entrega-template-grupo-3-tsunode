import { useContext, useEffect, useState } from 'react';
import { IMovies } from '../../Pages/HomePage/HomePage';
import { MovieContext } from '../../providers/MovieContext';
import { StyledUpperSection } from '../../Components/MoviesCard/MoviesCardStyle';
import { SmallYellowButton } from '../../styles/Buttons';
import { Paragraph, Title2 } from '../../styles/typography';
import { api } from '../../services/api';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Foot';
import { Modal } from '../../Components/Modal/Modal';

export const RenderPage = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [averageScore, setAverageScore] = useState(null);
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

  useEffect(() => {
    const fetchAverageReview = async () => {
      const movieId = localStorage.getItem('@LOCALMOVIEID');
      try {
        // Fetch movie details
        const { data } = await api.get(`/movies/${movieId}?_embed=reviews`);
        setSelectMovie(data);

        // Extract the score from the movie object
        const reviews = selectMovie?.reviews.map((review) => {
          return review.score;
        });

        //Calculate avg score
        const sum = reviews?.reduce((acc, cur) => {
          return acc + cur;
        }, 0);

        const average = sum / reviews?.length;
        setAverageScore(average);
      } catch (error) {
        console.log(error.message);
        setAverageScore(null);
      }
    };
    fetchAverageReview();
  });

  /*  console.log(selectMovie); */
  return (
    <>
      {selectMovie == null ? (
        <div>loading</div>
      ) : (
        <div>
          <Header />
          <img src={selectMovie.image} />
          <StyledUpperSection>
            <SmallYellowButton buttonSize={10}>
              {selectMovie.type}
            </SmallYellowButton>
            <Paragraph>{selectMovie.duration}</Paragraph>
          </StyledUpperSection>
          <StyledUpperSection>
            <Title2>{selectMovie.name}</Title2>
            <div>
              {averageScore !== null ? (
                <Paragraph> Avg Score {averageScore}</Paragraph>
              ) : (
                <Paragraph>loading...</Paragraph>
              )}
            </div>
          </StyledUpperSection>
          <Paragraph>{selectMovie.synopsis}</Paragraph>
          <div>
            <div>
              <Paragraph>Avaliações</Paragraph>
              <button onClick={() => setIsOpen(true)}>Avaliar</button>
            </div>
            {selectMovie.reviews.map((review, index) => (
              <div key={index}>
                <Paragraph>Filme {review.movieId}</Paragraph>
                <Paragraph>Usuário {review.userId}</Paragraph>
                <Paragraph>Comentário {review.description}</Paragraph>
                <Paragraph>Nota {review.score}</Paragraph>
              </div>
            ))}
          </div>
          {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
          <Footer />
        </div>
      )}
    </>
  );
};
