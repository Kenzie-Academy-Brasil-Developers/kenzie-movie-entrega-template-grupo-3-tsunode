import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    body{
        /* background-color: var(--lightgray2); */
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ol, ul, li{
        list-style: none;
    }
    button{
        cursor: pointer;
        border: none;
        outline: none;
        transition: 0.2s ease-in-out;
    }
`;
