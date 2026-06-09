import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;