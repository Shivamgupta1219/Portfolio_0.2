import { createContext, useContext } from "react";

// New key so the forced "light" values the old code saved are ignored
export const THEME_KEY = "portfolio-theme";

// Signal-orange accent as hex, for components that take JS colors.
// Keep in sync with --brand / --brand-2 in App.css.
export const BRAND = { light: "#ea580c", dark: "#fb6a2c" };
export const BRAND_COLORS = ["#fb6a2c", "#f5a524"];

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
