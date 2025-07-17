import { DEFAULT_THEME, TOGGLE_THEME } from "@/util/constants";
import { getStoredTheme, storeTheme } from "@/util/storage";
import { useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>(() => getStoredTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme =
        prevTheme === DEFAULT_THEME ? TOGGLE_THEME : DEFAULT_THEME;

      storeTheme(newTheme);

      return newTheme;
    });
  };

  return {
    toggleTheme,
    theme,
  };
}
