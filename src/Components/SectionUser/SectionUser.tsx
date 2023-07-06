import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Paragraph } from '../../styles/typography';

export const SectionUser = ({ setIsOpen, setIsOpenAtt }) => {
  const [reviewsNumber, setReviewsNumber] = useState([]);
  useEffect(() => {
    const userReview = async () => {
      const movieId = localStorage.getItem('@LOCALMOVIEID');
      const userId = localStorage.getItem('@USERID');
      try {
        const { data } = await api.get(
          `/movies/${movieId}/reviews?userId=${userId}`
        );

        setReviewsNumber(data);
        console.log(reviewsNumber);
      } catch (error) {
        console.log(error.message);
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
 

  return (
    <>
      {reviewsNumber.length === 0 ? (
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
      )}
    </>
  );
};
