import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-size: 87.5%; */
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme['base-title']};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    -webkit-font-smoothing: antialiased;
  }

  @media (max-width: 600px) {
    * {
    font-size: 87.5%;
    }
  }

`
