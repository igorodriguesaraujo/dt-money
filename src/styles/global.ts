import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
  }

  html,
  body {
    background: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme['gray-100']};
    font-family: 'Poppins', sans-serif;
    -webkit-font-antialiased: true;
  }

  body, 
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
  }
`;