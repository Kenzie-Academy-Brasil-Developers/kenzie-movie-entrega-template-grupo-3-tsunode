import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { AxiosError } from 'axios';

interface IMovies {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
}

export const HomePage = () => {
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);

  useEffect(() => {
    const renderMovies = async () => {
      try {
        const response = await api.get<IMovies[]>('/movies');
        setMoviesList(response.data);
      } catch (error) {
        const currentError = error as AxiosError<string>;
        console.log(currentError.response.data);
      }
    };
    renderMovies();
  }, []);

  return <div></div>;
};

// Inicialização de testes para a Página Home do Kenzie Movies (sem ser necessário Login)

//Farei alguns testes hoje após o término das minhas aulas, e se derem certo, irei colocar todas as Features em um Novo Folder Context (se quiserem posso fazê-lo depois) para a melhor componentização da página !
