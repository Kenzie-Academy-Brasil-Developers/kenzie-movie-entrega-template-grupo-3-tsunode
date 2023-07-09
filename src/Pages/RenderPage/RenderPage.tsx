import { useContext, useEffect } from "react";
import {
  StyledStarSec
} from "../../Components/MoviesCard/MoviesCardStyle";
import { MediumYellowButton, SmallYellowButton } from "../../styles/Buttons";
import {
  Paragraph,
  StarAvg,
  Title1,
  Title2,
} from "../../styles/typography";
import { api } from "../../services/api";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Foot";
import { ModalAtt } from "../../Components/ModalAtt/Modal";
import { ReviewsCard } from "../../Components/ReviewsCard/ReviewsCard";
import { SectionUser } from "../../Components/SectionUser/SectionUser";
import { MovieContext } from "../../providers/MovieContext";
import { UserContext } from "../../providers/UserContext";
import { ModalDelete } from "../../Components/ModalDelete/Modal";
import {
  AvaliationList,
  StyledAvaliationSec,
  StyledMovieDesc,
  StyledMovieDiv,
  StyledMovieSec,
  StyledMovieText,
} from "./RenderStyle";
import { star } from "../../assets/star";
import { BlackStar } from "../../assets/starBlack";
import { Modal } from "../../Components/Modal/Modal";
import { LogoutButton } from "../../Components/Header/styles";
import { useNavigate } from "react-router-dom";

export const RenderPage = () => {
  const { setMovieWithReview, setReviews, movieWithReview, reviews } =
    useContext(MovieContext);

  const { isOpen, isOpenAtt, isOpenDelete } = useContext(UserContext);

  const userId = localStorage.getItem("@USERID");

  const navigate = useNavigate()

  useEffect(() => {
    const loadMovie = async () => {
      const movieId = localStorage.getItem("@LOCALMOVIEID");
      try {
        const { data } = await api.get(`/movies/${movieId}?_embed=reviews`);
        setMovieWithReview(data);
        setReviews(data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    loadMovie();
    setMovieWithReview([] as any);
  }, []); //passou pro Context

  const sum = reviews?.reduce((acc, cur) => {
    return acc + Number(cur.score);
  }, 0);

  const average = (sum / reviews?.length).toFixed(1);

  return (
    <>
      {movieWithReview == null ? (
        <div>loading</div>
      ) : (
        <section>
          <StyledMovieSec backgroundimg={movieWithReview.image}>
            <Header />
            <StyledMovieDesc>
              <div>
                <LogoutButton onClick={() => navigate('/')}>Início {'>'}</LogoutButton>
                <LogoutButton>{movieWithReview.name}</LogoutButton>
              </div>
              <StyledMovieDiv>
                <SmallYellowButton buttonsize={10}>
                  {movieWithReview.type}
                </SmallYellowButton>
                <Paragraph>{movieWithReview.duration}m</Paragraph>
              </StyledMovieDiv>
              <StyledMovieDiv>
                <Title2>{movieWithReview.name}</Title2>
                <StyledStarSec>
                  {star()}
                  <StarAvg>{average}</StarAvg>
                </StyledStarSec>
              </StyledMovieDiv>
            </StyledMovieDesc>
          </StyledMovieSec>
          <StyledMovieText>
            <Paragraph>"{movieWithReview.synopsis}"</Paragraph>
          </StyledMovieText>
          <div>
            {userId == null ? (
              <StyledAvaliationSec>
                <Title1>Avaliações</Title1>
                  <MediumYellowButton
                    buttonsize={12}
                    onClick={() => {
                      alert("Esteja logado para poder avaliar");
                    }}
                  >
                    {BlackStar()}
                    Avaliar
                  </MediumYellowButton>
              </StyledAvaliationSec>
            ) : (
              <SectionUser />
            )}
            <AvaliationList>
              {reviews.map((review, index) => (
                <ReviewsCard review={review} index={index} />
              ))}
            </AvaliationList>
          </div>
          {isOpen ? <Modal /> : null}
          {isOpenAtt ? <ModalAtt /> : null}
          {isOpenDelete ? <ModalDelete /> : null}
          
          <Footer />
        </section>
      )}
    </>
  );
};
