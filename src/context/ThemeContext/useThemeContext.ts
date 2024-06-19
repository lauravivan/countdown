import { DEFAULT_THEME } from "@/util";
import { createContext, useContext } from "react";

const defaultThemeContextValue: ThemeContextNamespace.ThemeContextType = {
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextNamespace.ThemeContextType>(
    defaultThemeContextValue
  );

export function useTheme() {
  return useContext(ThemeContext);
}
