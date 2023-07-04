import { styled } from "styled-components";

interface Iinput {
    inputheight: number | undefined
    inputwidth: number | undefined

}

export const StyledInput = styled.input<Iinput>`
    width: ${({inputwidth}) => inputwidth}rem;
    height: ${({inputheight}) => inputheight}rem;
    outline: none;
    border: none;
    background-color: var(--lightgray1);
    padding: 0.5rem 1rem;
    font-family: var(--ff);
    color: var(--white);
    font-weight: 600;
`