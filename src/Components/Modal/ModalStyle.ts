import { styled } from "styled-components";

export const StyledModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledModalForm = styled.form`
  background-color: var(--lightgray2);
  width: 25rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 2.5rem;
  gap: 2rem;
`;
export const CloseModal = styled.button`
  color: var(--white);
  font-size: 1rem;
  font-family: var(--ff);
  font-weight: 200;
  background-color: transparent;
  cursor: pointer;
`;
