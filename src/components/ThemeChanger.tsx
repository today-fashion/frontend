import { darkTheme, lightTheme } from "@/styles/theme"
import { ThemeChangerProps } from "@/utils/interfaces"
import styled from "styled-components"

export function ThemeChanger (props: ThemeChangerProps): JSX.Element {
  return (
    <Button style={{
      backgroundColor: props.themeColor ? lightTheme.bgColor : darkTheme.bgColor,
      border: props.themeColor ? lightTheme.borderColor : darkTheme.borderColor,
      color: props.themeColor ? lightTheme.fontColor : darkTheme.fontColor
    }}
      onClick={props.onClick}
    >
      {props.themeColor ?
        "Dark"
      :
        "Light"
      }
    </Button>
  )
}

const Button = styled.button `
  position: absolute;
  bottom: 29px;
  font-weight: 600;
  font-style: italic;
  border-radius: 50%;
  text-align: center;

  width: 50px;
  height: 50px;

  z-index: 100;
  cursor: pointer;
  transition: all .35s;
  @media screen and (max-width: 1456px) {
    right: 48px;
  }

  @media screen and (max-width: 768px) {
    right: 74px;
  }

  @media screen and (max-width: 586px) {
    right: 24px;
  }
`