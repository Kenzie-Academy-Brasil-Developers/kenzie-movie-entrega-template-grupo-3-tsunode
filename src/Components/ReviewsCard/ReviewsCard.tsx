import { useEffect } from 'react';
import { Paragraph } from '../../styles/typography';
import { api } from '../../services/api';

export const ReviewsCard = ({ review, index }) => {

  useEffect(() => {
    const getUserName = async () => {
      try {
        const { data } = await api.get(`/users/${review.userId}`);
        const user = data
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserName();
  }, []);
  
  return (
    <div key={index}>
      <Paragraph>Filme: {review.movieId}</Paragraph>
      <Paragraph>Usuário: {review.userId}</Paragraph>
      <Paragraph>Comentário: {review.description}</Paragraph>
      <Paragraph>Nota: {review.score}</Paragraph>
    </div>
  );
};
