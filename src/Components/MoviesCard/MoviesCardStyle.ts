import { styled } from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    border-top-right-radius: 2.5625rem;
    border-top-left-radius: 2.5625rem;
    border-bottom-right-radius: 2.5625rem;
    border-bottom-left-radius: 2.5625rem;
    max-width: 100%;
    height: auto;
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
