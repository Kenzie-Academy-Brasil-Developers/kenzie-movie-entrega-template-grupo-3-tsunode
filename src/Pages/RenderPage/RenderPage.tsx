import { useContext, useEffect, useState } from 'react';

import { api } from '../../services/api';

import { IMovies } from '../../Pages/HomePage/HomePage';
import { MovieContext } from '../../providers/MovieContext';

export const RenderPage = () => {
  
  const { selectMovie } = useContext(MovieContext) as {
    selectMovie: (movie: IMovies | null) => void;
  };

  console.log(selectMovie)

  return (
    <div>ola</div>
  );
};

// on click -> pegar o id específico do filme , e disso armazenar em um estado (localstorage)
// e depois renderizar a página de detalhes do filme, lá ela pega as informações
