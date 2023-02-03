import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle`
	${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    transition: all .35s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    color-scheme: light;
    background-color: ${({ theme }: ThemeType) => theme.bgColor};
    color: ${({ theme }: ThemeType) => theme.fontColor}
  }

  @media (prefers-color-scheme: dark) {
    body: {
      color-scheme: dark;
      background-color: #242424;
      color: #fff;
    }
  }
`