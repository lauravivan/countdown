import { DEFAULT_THEME } from "@/util";
import { createContext, useContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const defaultThemeContextValue: ThemeContextType = {
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(
  defaultThemeContextValue
);

export function useTheme() {
  return useContext(ThemeContext);
}
