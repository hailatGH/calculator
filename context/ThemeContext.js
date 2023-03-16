import { useContext, useState, createContext } from "react";

const ThemeContext = createContext();
const ToggleThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useToggleTheme() {
  return useContext(ToggleThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={setTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
