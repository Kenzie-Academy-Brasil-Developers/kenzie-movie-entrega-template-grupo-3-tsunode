import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
`;
export const StyledFootDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  &:before {
    content: '';
    width: 250%;
    height: 0.625rem;
    margin-bottom: 2.3rem;
    z-index: 99;
    background-color: var(--lightgray1);
    top: -4rem;
  }
`;
