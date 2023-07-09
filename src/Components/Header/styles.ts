import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding: 2rem 14vw;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 688px) {
    img {
      width: 7rem;
    }
    button {
      width: 5rem;
    }
  }
`;
export const StyledHeadSection = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  @media screen and (max-width: 688px) {
    p {
      display: none;
    }
  }
`;
export const HeaderLetter = styled.h3`
  font-family: var(--ff);
  color: var(--white);
  font-weight: 400;
  background-color: var(--yellow);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 20rem;
  width: 2rem;
  height: 2rem;
  line-height: 3rem;
`;
export const LogoutButton = styled.button`
  color: var(--white);
  font-size: 1rem;
  font-family: var(--ff);
  font-weight: 600;
  background-color: transparent;
  outline: none;
  border: none;
`;
export const OuterHeaderDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 464px) {
    margin-top: 2rem;
  }
`;
export const InnerHeaderDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-right: 1rem;
`;
