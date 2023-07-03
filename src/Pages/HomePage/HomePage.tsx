import { useEffect, useState } from 'react';

import { api } from '../../services/api';

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
        console.log(error);
      }
    };
    renderMovies();
  }, []);

  return <div></div>;
};
