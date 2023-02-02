import { ReactNode } from "react"

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

export interface BtnInterface {
  children: ReactNode,
  themeColor: boolean,
  active: boolean,
  onClick?: void | null,
  margin?: string | null,
  padding?: string | null,
  border?: string | null,
  borderRadius?: string | null,
  fontSize?: string | null,
  fontWeight?: number | null,
  width?: string | null,
  height?: string | null,
  display?: string | null
}

export interface ThemeState {
  theme: boolean,
}

export type ThemeAction = 
  | { type: "Light" }
  | { type: "Dark" }
  | { type: "diff" }