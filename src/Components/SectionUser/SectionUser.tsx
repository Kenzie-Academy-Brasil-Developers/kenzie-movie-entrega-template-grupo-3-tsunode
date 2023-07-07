import { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Paragraph } from '../../styles/typography';
import { UserContext } from '../../providers/UserContext';
import { MovieContext } from '../../providers/MovieContext';

export const SectionUser = () => {

  const {setIsOpen, setIsOpenAtt} = useContext(UserContext)

  const { setUserReview, userReview, userReviewId, setUserReviewId} = useContext(MovieContext)



  useEffect(() => {
    const userReviewFunction = async () => {
      const movieId = localStorage.getItem('@LOCALMOVIEID');
      const userId = localStorage.getItem('@USERID');
      try {
        const { data } = await api.get(
          `/movies/${movieId}/reviews?userId=${userId}`
        );
      
        setUserReview(data[0])
        setUserReviewId(data[0].id);
      } catch (error) {
        console.log(error.message);
      }
    };
    userReviewFunction();
  }, []);
  
  const token = localStorage.getItem('@TOKEN');
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const deleteReview = async () => {
    const userId = localStorage.getItem('@USERID');
    try {
      const { data } = await api.delete(
        `/reviews/${userId}`, header
      );
      console.log('excluido com sucesso')
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      {userReview == undefined  ? (
        <div>
          <Paragraph>Avaliações</Paragraph>

    
          <button onClick={() => setIsOpen(true)}>Avaliar</button>
        </div>
      ) : (
        <div>
          <p>Sua Descrição</p>
          <p>{userReview.description}</p>
          <p>{userReview.score}</p>
          <button onClick={ () => setIsOpenAtt(true)}>Editar</button>
          <button onClick={ () => deleteReview()}>Excluir</button>
        </div>
      )}
    </>
  );
};
