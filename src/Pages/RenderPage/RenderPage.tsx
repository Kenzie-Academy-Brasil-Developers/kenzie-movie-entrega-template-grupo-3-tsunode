import { useContext, useEffect} from 'react';
import { IMovies } from '../../Pages/HomePage/HomePage';
import { MovieContext } from '../../providers/MovieContext';
import { StyledUpperSection } from '../../Components/MoviesCard/MoviesCardStyle';
import { SmallYellowButton } from '../../styles/Buttons';
import { Paragraph, Title2 } from '../../styles/typography';
import { api } from '../../services/api';

export const RenderPage = () => {
  
  const { setSelectMovie, selectMovie } = useContext(MovieContext) as {
    setSelectMovie: (movie: IMovies | null) => void;
    selectMovie: (movie: IMovies | null) => void;
  }

 

  useEffect(() => {
    const loadMovie = async () => {
        const movieId = localStorage.getItem('@LOCALMOVIEID')
        try {
            const { data } = await api.get(`/movies/${movieId}?_embed=reviews`)
            setSelectMovie(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    loadMovie()
}, [])

  console.log(selectMovie)


  return (
    <>
      {selectMovie == null ? <div>loading</div> : <div><img src={selectMovie.image} />
      <StyledUpperSection>
        <SmallYellowButton buttonSize={10}>{selectMovie.type}</SmallYellowButton>
        <Paragraph>{selectMovie.duration}</Paragraph>
      </StyledUpperSection>
      <StyledUpperSection>
        <Title2>{selectMovie.name}</Title2>
        <Paragraph>colocar o score</Paragraph> 
      </StyledUpperSection>
      <Paragraph>{selectMovie.synopsis}</Paragraph></div>}
    
    
      
      
    </>
  );
};

