import { styled } from "styled-components";

export const Title1 = styled.h2`
  color: var(--white);
  font-size: 2.75rem;
  font-family: var(--ff);
  font-weight: 700;
`;
export const Title1MobileB = styled.h2`
  color: var(--white);
  font-size: 1.3125rem;
  font-family: var(--ff);
  font-weight: 700;
`;
export const Title1MobileA = styled.h2`
  color: var(--white);
  font-size: 2rem;
  font-family: var(--ff);
  font-weight: 700;
`;
export const Title2 = styled.h3`
  color: var(--white);
  font-size: 1.625rem;
  font-family: var(--ff);
  font-weight: 700;
`;
export const Paragraph = styled.p`
  color: var(--white);
  font-size: 1rem;
  font-family: var(--ff);
  font-weight: 200;
`;
export const RegisterLink = styled.p`
  color: var(--yellow);
  font-size: 1.0625rem;
  font-family: var(--ff);
  text-decoration: underline;
  font-weight: 600;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;
export const HeaderCap = styled.p`
  color: var(--white);
  font-family: var(--ff);
  font-size: 1.0625rem;
  font-weight: 700;
  cursor: pointer;
`;
export const StarAvg = styled.p`
  color: var(--white);
  font-size: 1rem;
  font-family: var(--ff);
  font-weight: 600;
`;

export const HighlightedLetter = styled.h2`
  font-family: var(--ff);
  color: var(--white);
  font-weight: 600;
  background-color: var(--yellow);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 20rem;
  width: 3rem;
  height: 3rem;
`;
