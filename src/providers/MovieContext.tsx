import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface MovieProviderProps {
  children: ReactNode;
}

interface IAllmovies {
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

interface IMovieListContext {
  selectMovie: IMovies | null;
  setSelectMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
  averageScore: null;
  setAverageScore: React.Dispatch<React.SetStateAction<null>>;
  moviesList: IMovies[];
  setMoviesList: React.Dispatch<React.SetStateAction<IMovies[]>>;
  allMovies: IAllmovies[];
  setAllmovies: React.Dispatch<React.SetStateAction<IAllmovies[]>>;
  allMoviewsWithReview: IMovies[];
  setAllMoviesWithReview: React.Dispatch<React.SetStateAction<IMovies[]>>;
  reviews: IReview[];
  setReviews: React.Dispatch<React.SetStateAction<IReview[]>>;
  userReview: IReview;
  setUserReview: React.Dispatch<React.SetStateAction<IReview>>;
  userReviewId: number;
  setUserReviewId: React.Dispatch<React.SetStateAction<number>>;
  movieWithReview: IMovies;
  setMovieWithReview: React.Dispatch<React.SetStateAction<IMovies>>;
}

export const MovieContext = createContext({} as IMovieListContext);

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [selectMovie, setSelectMovie] = useState<IMovies | null>(null);
  const [averageScore, setAverageScore] = useState(null);
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);
  const [allMovies, setAllmovies] = useState<IAllmovies[]>([]); // allmovies
  const [allMoviewsWithReview, setAllMoviesWithReview] = useState<IMovies[]>(
    []
  ); //allmovieswithreview
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [userReview, setUserReview] = useState<IReview[]>([]);
  const [userReviewId, setUserReviewId] = useState<number>(0);
  const [movieWithReview, setMovieWithReview] = useState<IMovies[]>([]);

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
        setAllMoviesWithReview(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    allMoviesWithReviewFunction();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        selectMovie,
        setSelectMovie,
        averageScore,
        setAverageScore,
        moviesList,
        setMoviesList,
        allMovies,
        setAllmovies,
        allMoviewsWithReview,
        setAllMoviesWithReview,
        reviews,
        setReviews,
        userReview,
        setUserReview,
        userReviewId,
        setUserReviewId,
        movieWithReview,
        setMovieWithReview,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
