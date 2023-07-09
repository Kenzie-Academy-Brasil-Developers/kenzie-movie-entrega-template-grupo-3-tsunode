import { styled } from 'styled-components';

export const StyledRegister = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
export const StyledTitleSection = styled.div`
  margin-top: 3rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;
export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50rem;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1rem 1.5rem;
  margin-bottom: 7rem;
  input{
    width: 21rem;
    height: 4rem;
  }
  @media screen and (max-width: 752px) {
    h2 {
      color: var(--white);
      font-size: 1.3125rem;
      font-family: var(--ff);
      font-weight: 700;
    }
    input{
      width: 80vw;
    }
  }
`;
export const StyledInputArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;
export const StyledButtonLine = styled.section`
  display: flex;
  justify-content: end;
`;
