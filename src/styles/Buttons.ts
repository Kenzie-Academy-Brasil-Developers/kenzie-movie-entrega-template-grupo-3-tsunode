import { styled } from "styled-components";

interface IButtonSize {
  buttonsize: number | undefined;
}

export const SmallYellowButton = styled.button<IButtonSize>`
  width: ${({ buttonsize }) => buttonsize}rem;
  height: 2.6875rem;
  border-radius: 15.9375rem;
  background-color: var(--yellow);
  font-family: var(--ff);
  font-weight: 600;
  transition: 0.2s ease;
  &:hover {
    background-color: gold;
  }
  &:active {
    background-color: var(--white);
    color: var(--black);
  }
`;
export const MediumYellowButton = styled.button<IButtonSize>`
  width: ${({ buttonsize }) => buttonsize}rem;
  height: 3.6875rem;
  border-radius: 15.9375rem;
  background-color: var(--yellow);
  font-family: var(--ff);
  font-weight: 600;
  transition: 0.2s ease;
  &:hover {
    background-color: gold;
  }
  &:active {
    background-color: var(--white);
    color: var(--black);
  }
`;
export const BigYellowButton = styled.button<IButtonSize>`
  width: ${({ buttonsize }) => buttonsize}rem;
  height: 4.6875rem;
  border-radius: 15.9375rem;
  background-color: var(--yellow);
  font-family: var(--ff);
  font-weight: 600;
  transition: 0.2s ease;
  &:hover {
    background-color: gold;
  }
  &:active {
    background-color: var(--white);
    color: var(--black);
  }
`;
