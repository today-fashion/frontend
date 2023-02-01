export interface LoadProps {
  status: boolean,
  themeColor: boolean
}

export interface ErrorProps {
  title: string,
  desc: string
}

export interface ThemeState {
  theme: boolean,
}

export type ThemeAction = 
  | { type: "Light" }
  | { type: "Dark" }
  | { type: "diff" }