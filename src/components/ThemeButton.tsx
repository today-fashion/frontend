import { theme } from "@/styles/theme";
import { BtnInterface } from "@/utils/interfaces";
import styled from "styled-components";

export function ThemeButton(props: BtnInterface): JSX.Element {
  return (
    <Button
      style={{
        backgroundColor: props.active ? theme.button.activeBtn.bgColor : (props.themeColor ? theme.button.defaultBtn.lightBgColor : theme.button.defaultBtn.darkBgColor),
        color: props.active ? theme.button.activeBtn.fontColor : (props.themeColor ? theme.button.defaultBtn.lightFontColor : theme.button.defaultBtn.darkFontColor),
        ...props.style
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

const Button = styled.button `
  padding: 0;
  border: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  display: flex;
  transition: all .35s;
`