import { styled } from "styled-components";

export const StyledRegister = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12vw 0;
`;
export const StyledTitleSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;
export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 48rem;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1rem 1.5rem;

  @media screen and (max-width: 752px) {
    h2 {
      color: var(--white);
      font-size: 1.3125rem;
      font-family: var(--ff);
      font-weight: 700;
    }
    input{
        width: auto;
        flex-grow: 1;
    }
  }
`;
export const StyledInputArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
export const StyledButtonLine = styled.section`
  display: flex;
  justify-content: end;
`;
