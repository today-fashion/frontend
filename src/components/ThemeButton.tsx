import { activeBtn, darkTheme, defaultBtn, lightTheme } from "@/styles/theme";
import { BtnInterface } from "@/utils/interfaces";

export function ThemeButton(props: BtnInterface): JSX.Element {
  return (
    <button style={{ 
      margin: props.margin ? props.margin : "0",
      padding: props.padding ? props.padding : "0",
      backgroundColor: props.active ? activeBtn.bgColor : (props.themeColor ? defaultBtn.lightBgColor : defaultBtn.darkBgColor),
      color: props.active ? activeBtn.fontColor : (props.themeColor ? defaultBtn.lightFontColor : defaultBtn.darkFontColor),
      border: props.border ? props.border : (props.themeColor ? lightTheme.borderColor : darkTheme.borderColor),
      borderRadius: props.borderRadius ? props.borderRadius : "0",
      fontSize: props.fontSize ? props.fontSize : "auto",
      fontWeight: props.fontWeight ? props.fontWeight : "auto",
      width: props.width ? props.width : "auto",
      height: props.height ? props.height : "auto",
      display: props.display ? props.display : "auto",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }}
      onClick={() => props.onClick}
    >
      {props.children}
    </button>
  )
}