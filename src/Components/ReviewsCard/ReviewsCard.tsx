import { useEffect, useState } from "react";
import {
  HighlightedLetter,
  Paragraph,
  StarAvg,
  Title2,
} from "../../styles/typography";
import { api } from "../../services/api";
import { ReviewArea, StyledItem } from "./StyleReview";
import { StyledStarSec } from "../MoviesCard/MoviesCardStyle";
import { star } from "../../assets/star";

export const ReviewsCard = ({ review, index }: any) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      try {
        const { data } = await api.get(`/users/${review.userId}`);
        setUser(data.name);
      } catch (error) {
        console.log(error);
      }
    };
    getUserName();
  }, []);

  return (
    <StyledItem key={index}>
      <HighlightedLetter>{user[0]}</HighlightedLetter>
      <StyledStarSec>
        {star()}
        <StarAvg>{review.score}</StarAvg>
      </StyledStarSec>
      <ReviewArea>
        <Paragraph>"{review.description}"</Paragraph>
      </ReviewArea>
      <Title2>{user}</Title2>
    </StyledItem>
  );
};
