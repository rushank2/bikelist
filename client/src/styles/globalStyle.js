import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.palette.black};
    text-decoration: none;
  }

  img {
    width: 100%;
  }
  `;
