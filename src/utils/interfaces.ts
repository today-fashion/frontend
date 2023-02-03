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

export interface Props404 {
  themeColor: boolean
}

export interface BtnInterface extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode,
  themeColor: boolean,
  active: boolean,
}

export interface ThemeChangerProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  themeColor: boolean,
}

export interface ThemeState {
  theme: boolean,
}

export type ThemeAction = 
  | { type: "Light" }
  | { type: "Dark" }
  | { type: "diff" }