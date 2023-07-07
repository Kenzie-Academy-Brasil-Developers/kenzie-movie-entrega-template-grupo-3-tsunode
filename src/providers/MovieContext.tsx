import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const MovieContext = createContext({});

interface MovieProviderProps {
  children: ReactNode;
}

interface IAllmovies{
  
    id: number;
    name: string;
    type: string;
    duration: number;
    synopsis: string;
    image: string;
  
}
interface IMovies {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
  reviews: [
    {
      movieId: number;
      userId: number;
      score: number;
      description: string;
    }
  ];
}

interface IReview {
  
    id: number;
    movieId: number;
    userId: number;
    score: number;
    description: string;

}


export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [selectMovie, setSelectMovie] = useState<IMovies | null>(null);
  const [averageScore, setAverageScore] = useState(null);
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);
  const [allMovies, setAllmovies] = useState<IAllmovies[]>([]);
  const [allMoviewsWithReview, setAllMoviesWithReview] = useState<IMovies[]>([]);
  const [movieWithReview, setMovieWithReview] = useState<IMovies[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);


  const movieId = localStorage.getItem('@LOCALMOVIEID')

  // GET /movies
  useEffect(() => {
    const allMoviesFunction = async () => {
      try {
        const { data } = await api.get(`/movies`);
        setAllmovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    allMoviesFunction();
  }, []);

  // GET /movies/?_embed=reviews
  
  useEffect(() => {
    const allMoviesWithReviewFunction = async () => {
      
      try {
        const { data } = await api.get('/movies?_embed=reviews');
        setAllMoviesWithReview(data.reviews);
      } catch (error) {
        console.log(error.message);
      }
    };
    allMoviesWithReviewFunction();
  }, []);
 
  // GET /movies/:id?_embed=reviews

  useEffect(() => {
    const movieWithReviewFunction = async (id) => {
      
      try {
        const { data } = await api.get(`/movies/${id}?_embed=reviews`);
        setMovieWithReview(data);
        setReviews(data.reviews);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieWithReviewFunction();
  }, []);

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
        averageScore,
        setAverageScore,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
