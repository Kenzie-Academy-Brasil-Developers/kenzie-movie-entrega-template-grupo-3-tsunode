import { styled } from "styled-components";

interface Background {
  backgroundimg: string;
}

export const StyledMovieSec = styled.div<Background>`
  background-image: url(${({ backgroundimg }) => backgroundimg});
  background-size: cover;
  width: 100%;
  height: 40rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledMovieDesc = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 14vw;
  flex-wrap: wrap;
`;
export const StyledMovieDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
`;
export const StyledMovieText = styled.div`
  padding: 2rem 14vw;
`
export const StyledAvaliationSec = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 14vw;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 681px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

`
export const AvaliationList = styled.ul`
  padding: 2rem 14vw;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 6rem;
  justify-content: center;

`