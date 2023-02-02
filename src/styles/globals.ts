import { BtnStyleProps } from '@/utils/interfaces';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { activeBtn, darkTheme, defaultBtn, lightTheme, ThemeType } from './theme';

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

export const Button = styled.button `
  margin: ${({ margin }: BtnStyleProps) => margin ? margin : "0"};
  padding: ${({ padding }: BtnStyleProps) => padding ? padding : "0"};
  background-color: ${({ themeColor, active }: BtnStyleProps) => active ? activeBtn.bgColor : themeColor ? defaultBtn.lightBgColor : defaultBtn.darkBgColor};
  color: ${({ themeColor, active }: BtnStyleProps) => active ? activeBtn.fontColor : themeColor ? defaultBtn.lightFontColor : defaultBtn.darkFontColor};
  border: ${({ border }: BtnStyleProps) => border ? lightTheme.borderColor : darkTheme.borderColor};
  border-radious: ${({ borderRadius }: BtnStyleProps) => borderRadius ? borderRadius : "0"};
  font-size: ${({ fontSize }: BtnStyleProps) => fontSize ? fontSize : "auto"};
  font-weight: ${({ fontWeight }: BtnStyleProps) => fontWeight ? fontWeight : "auto"};
  width: ${({ width }: BtnStyleProps) => width ? width : "auto"};
  height: ${({ height }: BtnStyleProps) => height ? height : "auto"};
  display: ${({ display }: BtnStyleProps) => display ? display : "block"};
`