import { useThemeContext } from "../contexts/ThemeProvider";

function ThemeToggler(props) {
  const { theme, updateTheme } = useThemeContext();
  const { lightText, darkText } = props;

  const toggleTheme = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };

  const toggleText = theme === "light" ? darkText : lightText;

  return (
    <div id="theme-toggler" onClick={toggleTheme}>
      {toggleText}
    </div>
  );
}

export default ThemeToggler;
