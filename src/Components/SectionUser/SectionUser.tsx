import { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Paragraph } from '../../styles/typography';
import { UserContext } from '../../providers/UserContext';
import { MovieContext } from '../../providers/MovieContext';

export const SectionUser = () => {

  const {setIsOpen, setIsOpenAtt} = useContext(UserContext)

  const { setUserReview, userReview, userReviewId, setUserReviewId} = useContext(MovieContext)



  useEffect(() => {
    const userReview = async () => {
      const movieId = localStorage.getItem('@LOCALMOVIEID');
      console.log(movieId)
      const userId = localStorage.getItem('@USERID');
      console.log(userId)
      try {
        const res = await api.get(
          `/movies/${movieId}/reviews?userId=${userId}`
        );
      
        // setUserReview(data)
        // setUserReviewId(data[0].id);
        console.log(res)
        console.log('certo')
      } catch (error) {
        console.log(error.message);
        console.log('deu errado')
      }
    };
    userReview();
  }, []);
  
  const token = localStorage.getItem('@TOKEN');

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const deleteReview = async () => {
    const userId = localStorage.getItem('@USERID');
    console.log(userId)
    try {
      const { data } = await api.delete(
        `/reviews/${userId}`, header
      );
      console.log('excluido com sucesso')
    } catch (error) {
      console.log(error);
    }
  };
 
  // console.log(reviewsNumber)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Avaliar</button>
      {/* {userReview.length === 0 ? (
        <div>
          <Paragraph>Avaliações</Paragraph>

    
          <button onClick={() => setIsOpen(true)}>Avaliar</button>
        </div>
      ) : (
        <div>
          <p>Sua Descrição</p>
          <p>{reviewsNumber.description}</p>
          <p>{reviewsNumber.score}</p>
          <button onClick={ () => setIsOpenAtt(true)}>Editar</button>
          <button onClick={ () => deleteReview()}>Excluir</button>
        </div>
      )} */}
    </>
  );
};
