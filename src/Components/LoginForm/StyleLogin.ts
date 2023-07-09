import styled from "styled-components";

export const StyledLoginSection = styled.section`
  background-image: url("../../../src/assets/Rectangle 13.svg");
  background-size: cover;
  height: 82vh;
  margin-bottom: -2rem;
`;
export const StyledLoginForm = styled.form`
  background-color: var(--lightgray2);
  display: flex;
  flex-direction: column;
  max-width: 33rem;
  padding: 1rem 1.5rem;
  margin-left: 14vw;
  gap: 2rem;
  border-radius: 8px;
  margin-top: 4rem;
  input {
    height: 3rem;
  }
  @media screen and (max-width: 844px) {
    margin: 4rem 14vw;
  }
`;
export const LoginLowerSection = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 1rem;
`;
