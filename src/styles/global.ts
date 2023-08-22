import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;
    }

    button {
      background-color: transparent;
      border: none;
      box-shadow: none;
      cursor: pointer;
      color: inherit;
    }

    input{
      background-color: transparent;
      border: none; 
    }

    img{
      display: block;
      width: 100%; 
      height: 100%; 
    }



`;
