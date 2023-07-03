import { IMovies } from '../../Pages/HomePage/HomePage';

interface IMoviesCardProps {
  movie: IMovies;
  setCurrentMovie: React.Dispatch<React.SetStateAction<IMovies | null>>;
}

export const MoviesCard = ({ movie, setCurrentMovie }: IMoviesCardProps) => {
  return (
    <li>
      <h2>{movie.name}</h2>
      <h2>{movie.type}</h2>
      <h2>{movie.duration}</h2>
      <h2>{movie.synopsis}</h2>
      <img src={movie.image} />
      <button onClick={() => setCurrentMovie(movie)}>Know more</button>
    </li>
  );
};
