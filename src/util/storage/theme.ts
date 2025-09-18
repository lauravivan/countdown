import { DEFAULT_THEME } from "../constants";
import { ThemeType } from "@/types/theme";

export function getStoredTheme(): ThemeType {
  const theme = localStorage.getItem("countdown-theme") as ThemeType;
  return theme || DEFAULT_THEME;
}

export function storeTheme(theme: ThemeType) {
  localStorage.setItem("countdown-theme", theme);
}
