import { DEFAULT_THEME, TOGGLE_THEME } from "@/util/constants";
import { getStoredTheme } from "@/util/storage";
import { useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>(() => getStoredTheme());

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === DEFAULT_THEME ? TOGGLE_THEME : DEFAULT_THEME
    );
  };

  return {
    toggleTheme,
    theme,
  };
}
