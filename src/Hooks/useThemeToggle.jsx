import { useState, useEffect } from "react";

const useThemeToggle = () => {
  const [theme, setTheme] = useState("night");

  const toggleTheme = () => {
    const newTheme = theme === "cupcake" ? "night" : "cupcake";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const initialTheme = document.documentElement.getAttribute("data-theme");
    if (initialTheme) {
      setTheme(initialTheme);
    }
  }, []);

  return { theme, toggleTheme };
};

export default useThemeToggle;