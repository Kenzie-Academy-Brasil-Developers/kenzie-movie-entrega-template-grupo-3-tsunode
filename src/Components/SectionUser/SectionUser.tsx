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
          <p>{reviewsNumber[0].description}</p>
          <p>{reviewsNumber[0].score}</p>
          <button onClick={ () => setIsOpenAtt(true)}>Editar</button>
          <button>Excluir</button>
        </div>
      )}
    </>
  );
};
