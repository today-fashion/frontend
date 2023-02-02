import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent, MouseEventHandler, ReactNode } from "react"

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

export interface BtnInterface extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode,
  themeColor: boolean,
  active: boolean,
  margin?: string | null,
  border?: string | null,
  fontSize?: string | null,
  fontWeight?: number | null,
  width?: string | null,
  height?: string | null,
}

export interface ThemeState {
  theme: boolean,
}

export type ThemeAction = 
  | { type: "Light" }
  | { type: "Dark" }
  | { type: "diff" }