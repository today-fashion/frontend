import { setCookie } from "@/utils/cookies";
import { ThemeAction, ThemeState } from "@/utils/interfaces";

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "Light":
      setCookie("Theme", "Light", { path: "/" });
      return {
        theme: true
      }
    case "Dark":
      setCookie("Theme", "Dark", { path: "/" });
      return {
        theme: false
      }
    case "diff":
      setCookie("Theme", state.theme ? "Dark" : "Light", { path: "/" });
      return {
        theme: !state.theme
      }
    default:
      return {
        ...state
      }
  }
}