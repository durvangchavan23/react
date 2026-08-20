import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export { ThemeContext };

export const ThemePorvider = ThemeContext.Provider;

export function useTheme() {
  return useContext(ThemeContext);
}
