import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { MoviesList } from '../../Components/MoviesList/MoviesList.tsx';
import { Header } from '../../Components/Header/Header.tsx';
import { Footer } from '../../Components/Footer/Foot.tsx';



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
  const [moviesList, setMoviesList] = useState<IMovies[]>([]);
  
  useEffect(() => {
    const renderMovies = async () => {
      try {
        const { data } = await api.get<IMovies[]>('/movies?_embed=reviews');
        setMoviesList(data);
      } catch (error) {
        console.log(error);
      }
    };
    renderMovies();
  }, []);

  

  return (
    
    <div>
      <a href="/">homePage</a>
      <a href="/loginPage">loginPage</a>
      <a href="/registerPage">registerPage</a>
      <Header/>
      <MoviesList moviesList={moviesList} />
      <Footer/>
    </div>
  );
};
