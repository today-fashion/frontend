import { activeBtn, darkTheme, defaultBtn, lightTheme } from "@/styles/theme";
import { BtnInterface } from "@/utils/interfaces";
import styled from "styled-components";

export function ThemeButton(props: BtnInterface): JSX.Element {
  return (
    <Button style={{ 
      margin: props.margin ? props.margin : "0",
      backgroundColor: props.active ? activeBtn.bgColor : (props.themeColor ? defaultBtn.lightBgColor : defaultBtn.darkBgColor),
      color: props.active ? activeBtn.fontColor : (props.themeColor ? defaultBtn.lightFontColor : defaultBtn.darkFontColor),
      border: props.border ? props.border : (props.themeColor ? lightTheme.borderColor : darkTheme.borderColor),
      fontSize: props.fontSize ? props.fontSize : "auto",
      fontWeight: props.fontWeight ? props.fontWeight : "auto",
      width: props.width ? props.width : "auto",
      height: props.height ? props.height : "auto"
    }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

const Button = styled.button `
  padding: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  display: flex;
`