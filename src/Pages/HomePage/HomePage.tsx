import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { MoviesList } from '../../Components/MoviesList/MoviesList.tsx';

export interface IMovies {
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

export const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);
  const [currentMovie, setCurrentMovie] = useState<IMovies | null>(null);

  useEffect(() => {
    const renderMovies = async () => {
      try {
        const { data } = await api.get<IMovies[]>('/movies?_embed=reviews');
        setMoviesList(data);
        console.log(data)
        localStorage.setItem('MOVIEID', JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };
    renderMovies();
  }, []);

  return (
    <div>
      <a href="/homePage">homePage</a>
      <a href="/loginPage">loginPage</a>
      <a href="/registerPage">registerPage</a>
     {/*  {openModal ? <p>Modal is Open</p> : null}
      {currentMovie ? (
        <div>
          <button onClick={() => setCurrentMovie(null)}>Close Modal</button>
          <img src={currentMovie.image} />
          <p>{currentMovie.type}</p>
          <h2>{currentMovie.name}</h2>
          <p>{currentMovie.synopsis}</p>
          <div>
            <button> Rate movie</button>
          </div>
        </div>
      ) : null} */}
      <MoviesList moviesList={moviesList} setCurrentMovie={setCurrentMovie} />
    </div>
  );
};
