import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  ol, ul,
  button,
  p,
  h1 {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 400;
    background: rgba(20, 20, 40, 0.7);
  }
  ul {
    list-style: none;
  }
  button {
    background-color: inherit;
    border: none;
  }
`;