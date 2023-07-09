import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { Paragraph, StarAvg, Title1 } from "../../styles/Typography";
import { UserContext } from "../../providers/UserContext";
import { MovieContext } from "../../providers/MovieContext";
import { StyledAvaliationSec } from "../../Pages/RenderPage/RenderStyle";
import { MediumYellowButton } from "../../styles/Buttons";
import { BlackStar } from "../../assets/starBlack";
import { Pen } from "../../assets/pen";
import {
  ButtonSec,
  DescSec,
  StyledEditButton,
  StyledMainSec,
} from "./StyleSection";
import { Trash } from "../../assets/trash";
import { star } from "../../assets/star";
import { StyledList } from "../MoviesList/MoviesList";

export const SectionUser = () => {
  const { setIsOpen, setIsOpenAtt, setIsOpenDelete } = useContext(UserContext);

  const { setUserReview, userReview, userReviewId, setUserReviewId } =
    useContext(MovieContext);

  useEffect(() => {
    const movieId = localStorage.getItem("@LOCALMOVIEID");
    const userId = localStorage.getItem("@USERID");
    const userReviewFunction = async () => {
      try {
        const { data } = await api.get(
          `/movies/${movieId}/reviews?userId=${userId}`
        );

        setUserReview(data[0]);
        setUserReviewId(data[0].id);
      } catch (error) {
        console.log(error);
      }
    };
    if (movieId && userId) {
      userReviewFunction();
    }
  }, []);

  const token = localStorage.getItem("@TOKEN");
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <>
      {userReview == undefined ? (
        <StyledAvaliationSec>
          <Title1>Avaliações</Title1>
          <MediumYellowButton buttonsize={10} onClick={() => setIsOpen(true)}>
            {BlackStar()}Avaliar
          </MediumYellowButton>
        </StyledAvaliationSec>
      ) : (
        <>
          <StyledAvaliationSec>
            <Title1>Avaliações</Title1>
          </StyledAvaliationSec>
          <StyledAvaliationSec>
            <StarAvg>Sua Descrição</StarAvg>
          </StyledAvaliationSec>
          <StyledAvaliationSec>
            <StyledMainSec>
              <DescSec>
                <Paragraph>
                 {userReview.description}
                </Paragraph>
              </DescSec>
              <ButtonSec>
                <StarAvg>
                  {star()}
                  {userReview.score}
                </StarAvg>
                <StyledEditButton onClick={() => setIsOpenAtt(true)}>
                  {Pen()}
                </StyledEditButton>
                <StyledEditButton onClick={() => setIsOpenDelete(true)}>
                  {Trash()}
                </StyledEditButton>
              </ButtonSec>
            </StyledMainSec>
          </StyledAvaliationSec>
        </>
      )}
    </>
  );
};
