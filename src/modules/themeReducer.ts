import { ThemeAction, ThemeState } from "@/utils/interfaces";

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "Light":
      return {
        theme: true
      }
    case "Dark":
      return {
        theme: false
      }
    case "diff":
      return {
        theme: !state.theme
      }
    default:
      return {
        ...state
      }
  }
}