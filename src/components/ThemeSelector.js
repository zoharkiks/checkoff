"use client";

import { useThemeStore } from "@/app/store";
import { toggleTheme } from "../app/utils/setTheme";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

const ThemeSelector = () => {
  const [theme, setTheme] = useThemeStore((state) => [
    state.theme,
    state.setTheme,
  ]);

    // Add user preference theme to the app
    useEffect(() => {
        const prefersDarkMode = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = theme || (prefersDarkMode ? "dark" : "light");
        // Set the data-theme attribute based on the user's system preference
        document.documentElement.setAttribute("data-theme", initialTheme);
        setTheme(initialTheme);
      }, []);
    
      // Update the data-theme attribute whenever the theme state changes
      useEffect(() => {
        if (theme) {
          document.documentElement.setAttribute("data-theme", theme);
        }
      }, [theme]);
      

  return (
    <div className="flex items-center justify-center ">
      <div className="flex p-2 space-x-2 rounded-lg bg-surface-tertiary w-max">
        <div
          onClick={() => toggleTheme("light", setTheme)}
          className={`flex items-center px-3 py-1 space-x-1 rounded-lg cursor-pointer ${
            theme === "light" && "mode-active-light"
          }`}
        >
          <Icon icon={"iconamoon:mode-light-light"} />
        </div>
        <div
          onClick={() => toggleTheme("dark", setTheme)}
          className={`flex items-center px-3 py-1 space-x-1 rounded-lg cursor-pointer ${
            theme === "dark" && "mode-active-dark"
          }`}
        >
          <Icon icon={"iconamoon:mode-dark-light"} />
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
