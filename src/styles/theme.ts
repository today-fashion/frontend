export const lightTheme = {
  bgColor: "#fff",
  fontColor: "#242424",
  borderColor: "1px solid #eaeaea",
  btnColor: "#0e2ee2",
  btnFontColor: "#fff"
}

export const darkTheme = {
  bgColor: "#242424",
  fontColor: "#fff",
  borderColor: "1px solid #2c2d33",
  btnColor: "#0e2ee2",
  btnFontColor: "#fff"
}

export const theme = {
  lightTheme,
  darkTheme
}

export interface ThemeType {
  theme: {
    bgColor: string,
    fontColor: string,
    borderColor: string
  }
}
