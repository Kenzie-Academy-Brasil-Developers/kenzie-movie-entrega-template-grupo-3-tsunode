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
  
  
  
  return (
    
    <div>
      <a href="/">homePage</a>
      <a href="/loginPage">loginPage</a>
      <a href="/registerPage">registerPage</a>
      <Header/>
      <MoviesList  />
      <Footer/>
    </div>
  );
};
