import { ReactNode, createContext, useEffect, useState } from 'react';
import { IMovies } from '../Pages/HomePage/HomePage';
import { api } from '../services/api';

export const MovieContext = createContext({});

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [selectMovie, setSelectMovie] = useState<IMovies | null>(null);
  const [averageScore, setAverageScore] = useState(null);

  // GET /movies
  const renderAllMovies = async () => {
    useEffect(() => {
      const loadMovie = async () => {
        try {
          const { data } = await api.get(`/movies`);
          setSelectMovie(data);
        } catch (error) {
          console.log(error.message);
        }
      };
      loadMovie();
      setSelectMovie(null);
    }, []);
  };

  // GET /movies/?_embed=reviews
  const renderAllMoviesWithReview = async () => {
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
  };

  // GET /movies/:id?_embed=reviews
  // filme específico com suas respecitvas avaliações passando o id para rota

  const renderMovieWithIdRoute = async () => {
    const reviewId = '@REVIEWID';
    localStorage.setItem('@REVIEWID', reviewId);

    // COLETANDO REVIEWID

    const storedReviewId = localStorage.getItem('@REVIEWID');
    console.log(storedReviewId);

    // USEEFFECT PARA REVIEWID
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
  };

  //CALCULATE AVERAGE SCORE
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

  return (
    <MovieContext.Provider
      value={{
        selectMovie,
        setSelectMovie,
        renderAllMovies,
        averageScore,
        setAverageScore,
        renderAllMoviesWithReview,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
