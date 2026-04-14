import { useEffect, useState } from "react";
import  ThemeContext  from "./ThemeContextValue";



export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
  
    //check for the theme if not found then give the default theme light.
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
   });
 
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log('toggle btn clicked');
    console.log('theme', theme)
  }

  const themeValue = {
    theme: theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}
