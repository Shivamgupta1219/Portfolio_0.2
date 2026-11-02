import { createContext, useContext } from "react";

// New key so the forced "light" values the old code saved are ignored
export const THEME_KEY = "portfolio-theme";

// Brand gradient, shared by the React Bits components that take JS colors
export const BRAND_COLORS = ["#6366f1", "#a855f7", "#ec4899"];

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
