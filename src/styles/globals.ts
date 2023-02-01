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
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }: ThemeType) => theme.bgColor};
    color: ${({ theme }: ThemeType) => theme.fontColor}
  }
`