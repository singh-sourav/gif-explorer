import React from "react";

const ThemeContext = React.createContext();
const themeFromLocalStorage = localStorage.getItem("theme");

export function ThemeProvider(props) {
  const [theme, setTheme] = React.useState(themeFromLocalStorage || "dark");

  /**
   * Storing the theme in localstorage for future visits
   */
  const updateTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  /**
   * This effect has global logic of how theme can be used.
   * Children can also have their overriding effects
   */
  React.useEffect(() => {
    document.querySelector("html").className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
}
