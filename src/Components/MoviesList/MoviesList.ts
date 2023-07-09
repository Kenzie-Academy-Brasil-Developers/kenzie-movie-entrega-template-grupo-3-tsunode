import { styled } from "styled-components";

export const StyledListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 14vw;
  gap: 2.2rem;
  justify-content: center;
  align-items: center;
`;
export const StyledList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 2.8rem;
  li:not(:first-child) {
    width: clamp(2rem, 80vw, 23rem);
    @media screen and (max-width: 1173px) {
      width: 80vw;

    }
  }
`;
