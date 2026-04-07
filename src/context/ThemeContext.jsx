import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  // Get theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    // Apply theme to document root
    document.documentElement.className = savedTheme;
    setIsMounted(true);
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      // Apply theme to document root immediately
      document.documentElement.className = newTheme;
      return newTheme;
    });
  }

  const themeValue = {
    theme: theme,
    toggleTheme,
  };

  // Avoid hydration issues
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}