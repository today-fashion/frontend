export interface LoadProps {
  status: boolean,
  themeColor: boolean
}

export interface ErrorProps {
  title: string,
  desc: string,
  themeColor: boolean
}

export interface DefaultProps {
  themeColor: boolean
}

export interface BtnStyleProps {
  themeColor: boolean,
  active: boolean,
  margin: string | undefined,
  padding: string | undefined,
  border: string | undefined,
  borderRadius: string | undefined,
  fontSize: string | undefined,
  fontWeight: number | undefined,
  width: string | undefined,
  height: string | undefined,
  display: string | undefined
}

export interface ThemeState {
  theme: boolean,
}

export type ThemeAction = 
  | { type: "Light" }
  | { type: "Dark" }
  | { type: "diff" }