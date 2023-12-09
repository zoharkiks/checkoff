// Utility function to toggle the theme
const toggleTheme = (themeName, setThemeCallback) => {
  setThemeCallback(themeName);
};

// Utility function to set the theme based on user preference
const setUserPreferenceTheme = (theme, setThemeCallback) => {
  if (!theme) {
    // Check for system preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const systemPreferredTheme = prefersDarkMode ? "dark" : "light";
    // Apply the system preferred theme only if there's no current theme set by the user
    if (document.documentElement.getAttribute("data-theme") === null) {
      document.documentElement.setAttribute("data-theme", systemPreferredTheme);
      setThemeCallback(systemPreferredTheme);
    }
  } else {
    // If there's an existing theme set by the user, use that instead
    document.documentElement.setAttribute("data-theme", theme);
    setThemeCallback(theme);
  } 
};

export { toggleTheme, setUserPreferenceTheme };
