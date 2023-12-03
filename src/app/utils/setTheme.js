// Utility function to toggle the theme
const toggleTheme = (themeName, setThemeCallback) => {
    setThemeCallback(themeName);
  };
  
  // Utility function to set the theme based on user preference
  const setUserPreferenceTheme = (setThemeCallback) => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = prefersDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", initialTheme);
    setThemeCallback(initialTheme);
  };
  
  export { toggleTheme, setUserPreferenceTheme };




