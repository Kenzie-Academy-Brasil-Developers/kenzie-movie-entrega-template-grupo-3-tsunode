import { styled } from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    border-radius: 2.5625rem;
    max-width: 100%;
    height: auto;
    @media screen and (max-width: 1173px) {
      border-radius: 4rem;
    }
  }
  @media screen and (max-width: 507px) {
    h3 {
      color: var(--white);
      font-size: 1rem;
      font-family: var(--ff);
      font-weight: 700;
    }
    button {
      width: 8rem;
    }
  }
`;
export const StyledUpperSection = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
export const StyledStarSec = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
