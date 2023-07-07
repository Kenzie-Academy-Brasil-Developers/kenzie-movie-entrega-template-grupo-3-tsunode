import { useContext, useEffect, useState } from 'react';
import { StyledUpperSection } from '../../Components/MoviesCard/MoviesCardStyle';
import { SmallYellowButton } from '../../styles/Buttons';
import { Paragraph, Title2 } from '../../styles/typography';
import { api } from '../../services/api';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Foot';
import { Modal } from '../../Components/Modal/Modal';
import { ModalAtt } from '../../Components/ModalAtt/Modal';
import { ReviewsCard } from '../../Components/ReviewsCard/ReviewsCard';
import { SectionUser } from '../../Components/SectionUser/SectionUser';
import { MovieContext } from '../../providers/MovieContext';
import { UserContext } from '../../providers/UserContext';

export const RenderPage = () => {
  
  
  const { setMovieWithReview , setReviews, movieWithReview, reviews } = useContext(MovieContext)

  const { isOpen, isOpenAtt } = useContext(UserContext)


  const userId = localStorage.getItem('@USERID');

  useEffect(() => {
    const loadMovie = async () => {
      const movieId = localStorage.getItem('@LOCALMOVIEID');
      try {
        const { data } = await api.get(`/movies/${movieId}?_embed=reviews`);
        setMovieWithReview(data);
        setReviews(data.reviews);

      } catch (error) {
        console.log(error.message);
      }
    };
    loadMovie();
    setMovieWithReview([]);
  }, []); //passou pro Context

  const sum = reviews?.reduce((acc, cur) => {
    return acc + Number(cur.score);
  }, 0);

  const average = sum / reviews?.length;

  
 
  return (
    <>
      {movieWithReview == null ? (
        <div>loading</div>
      ) : (
        <div>
          <Header />
          <img src={movieWithReview.image} />
          <StyledUpperSection>
            <SmallYellowButton buttonsize={10}>
              {movieWithReview.type}
            </SmallYellowButton>
            <Paragraph>{movieWithReview.duration}</Paragraph>
          </StyledUpperSection>
          <StyledUpperSection>
            <Title2>{movieWithReview.name}</Title2>
            <div>
              
                <Paragraph>{average}</Paragraph>
    
            </div>
          </StyledUpperSection>
          <Paragraph>{movieWithReview.synopsis}</Paragraph>
          <div>
            {userId == null ? (
              <div>
                <Paragraph>Avaliações</Paragraph>

                <button>Avaliar</button>
              </div>
            ) : (
              <SectionUser  />
            )}

            {reviews.map((review, index) => (
              <ReviewsCard
                review={review}
                index={index}
                
              />
            ))}
          </div>
          {isOpen ? <Modal/> : null}
          {isOpenAtt ? <ModalAtt /> : null}
          <Footer />
        </div>
      )}
    </>
  );
};
