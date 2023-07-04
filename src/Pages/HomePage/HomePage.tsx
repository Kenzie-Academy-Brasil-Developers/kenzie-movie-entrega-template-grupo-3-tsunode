import { useEffect, useState } from 'react';

import { api } from '../../services/api';
/* import { AxiosError } from 'axios'; */

import { MoviesList } from '../../Components/MoviesList/MoviesList.tsx';

export interface IMovies {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
}

export const HomePage = () => {
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<IMovies | null>(null);

  useEffect(() => {
    const renderMovies = async () => {
      try {
        const response = await api.get<IMovies[]>('/movies');
        setMoviesList(response.data);
      } catch (error) {
        /*  const currentError = error as AxiosError<string>; */
        /* console.log(currentError.response.data); */
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
      {openModal ? <p>Modal is Open</p> : null}
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
      ) : null}
      <MoviesList moviesList={moviesList} setCurrentMovie={setCurrentMovie} />
      {/* <ul>
        {moviesList.map((movie, index) => {
          return (
            <li key={index}>
              <h1>{movie.name}</h1>
              <h2>{movie.type}</h2>
              <h3>{movie.duration}</h3>
              <h4>{movie.synopsis}</h4>
              <img src={movie.image} />
              <button onClick={() => setCurrentMovie(movie)}>Know more</button>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

// Inicialização de testes para a Página Home do Kenzie Movies (sem ser necessário Login)

//Farei alguns testes hoje após o término das minhas aulas, e se derem certo, irei colocar todas as Features em um Novo Folder Context (se quiserem posso fazê-lo depois) para a melhor componentização da página !
