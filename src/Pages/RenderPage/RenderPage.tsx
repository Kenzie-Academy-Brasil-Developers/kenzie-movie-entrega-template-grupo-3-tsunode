import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { IMovies } from '../../Pages/HomePage/HomePage';

export const RenderPage = () => {
  const [movieReview, setMovieReview] = useState<IMovies[]>([]);

 /*  useEffect(() => {
    const id = localStorage.getItem("MOVIEID")
    const renderMovieReview = async () => {
      try {
        const { data } = await api.get<IMovies[]>(`/movies/${id}`);
        setMovieReview(data);
      } catch (error) {
        console.log(error);
      }
    };
    renderMovieReview();
  }, []) */;

  return (
    <div>
      <h1>RenderPage</h1>
      <p>here we will see the specific movie rendered!</p>

      <div>
        <li>
          {movieReview.map((movie, index) => {
            return (
              <div key={index}>
                <li>{movie.name}</li>
                <p>here we will see the specific movie rendered!</p>
              </div>
            );
          })}
        </li>
      </div>
    </div>
  );
};

// on click -> pegar o id específico do filme , e disso armazenar em um estado (localstorage)
// e depois renderizar a página de detalhes do filme, lá ela pega as informações
