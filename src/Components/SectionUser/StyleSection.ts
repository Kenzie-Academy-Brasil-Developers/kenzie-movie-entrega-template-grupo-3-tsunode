import { styled } from "styled-components";

export const StyledEditButton = styled.button`
  background-color: transparent;
`;
export const DescSec = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  max-width: 40vw;
`;
export const ButtonSec = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-self: center;
  justify-self: center;
  text-align: center;
`;
export const StyledMainSec = styled.section`
  margin: 1rem 5rem;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  p{
    max-width: 30vw;
  }
  @media screen and (max-width: 897px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    margin: 0;
  }
`;
