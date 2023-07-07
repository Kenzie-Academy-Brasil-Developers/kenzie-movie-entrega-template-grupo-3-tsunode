import { useContext, useEffect, useState } from 'react';
import { Paragraph } from '../../styles/typography';
import { api } from '../../services/api';
import { UserContext } from '../../providers/UserContext';

export const ReviewsCard = ({ review, index }) => {
  const [user, setUser] = useState('');

  const { setIsOpenAtt } = useContext(UserContext)

  useEffect(() => {
    const getUserName = async () => {
      try {
        const { data } = await api.get(`/users/${review.userId}`);
        setUser(data.name);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserName();
  }, []);

  return (
    <div key={index} setIsOpenAtt={setIsOpenAtt}>
      <Paragraph>{user[0]}</Paragraph>
      <Paragraph>{review.score}</Paragraph>
      <Paragraph>{review.description}</Paragraph>
      <Paragraph>{user}</Paragraph>
    </div>
  );
};
