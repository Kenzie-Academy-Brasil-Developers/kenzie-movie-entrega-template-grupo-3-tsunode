import { styled } from 'styled-components';

export const StyledLoginSection = styled.section`
  background-image: url('../../../src/assets/Rectangle 13.png');
  background-size: cover;
  height: 80vh;
`;
export const StyledLoginForm = styled.form`
  background-color: var(--lightgray2);
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  padding: 1rem 1.5rem;
  gap: 2rem;
  border-radius: 8px;
  margin-top: 10rem;
  margin-left: 10rem;
  @media screen and (max-width: 844px) {
    margin: 10rem auto;
  }
`;
export const LoginLowerSection = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 1rem;
`;
