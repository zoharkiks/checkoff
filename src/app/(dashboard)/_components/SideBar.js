import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSidebarStore, useThemeStore } from "../../store";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Icon } from "@iconify/react";
import { getMenuItems } from "../../utils/menuItems";
import { setUserPreferenceTheme, toggleTheme } from "../../utils/setTheme";
import { Button } from "@/components/Button";

const SideBar = () => {
  // TODO Smooth out light and dark animation on switch
  // TODO Add SignOut
  // TODO Separate component for  Theme Toggle

  // Accessing Zustand States
  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  const [theme, setTheme] = useThemeStore((state) => [
    state.theme,
    state.setTheme,
  ]);

  // // Function to toggle between light and dark themes
  // const toggleTheme = (themeName) => {
  //   setTheme(themeName);
  // };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

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

  const { data: session } = useSession();
  const menuItems = getMenuItems(session?.user?.id);

  return (
    <div className="fixed top-0 left-0 h-full overflow-hidden dark:text-white bg-surface-secondary padding md:w-1/4">
      <Icon
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute text-xl cursor-pointer top-4 right-4 md:hidden"
        icon={"jam:close"}
      />

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <Link href="/" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <span className="logo">CheckOff</span>
          </Link>
          <span className="text-sm font-medium">
            Turning To-Do's into Ta-Da's
          </span>
        </div>

        <div className="flex items-center justify-center md:justify-start">
          <div className="flex flex-col items-center justify-center gap-2 p-2 mt-6 border w-max rounded-xl ">
            {/* profile pic */}
            {/* User Data */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-surface-primary"></div>
              <div className="flex-col items-center justify-center col-span-3">
                <div className="flex ">
                  <span className="text-xs font-semibold">
                    {session?.user?.name}
                  </span>
                  <Icon icon={"system-uicons:chevron-down"} />
                </div>
                <span className="text-xs">{session?.user?.email}</span>
              </div>
            </div>

              <Button
                intent="secondary"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log Out
              </Button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="mt-8">
          <div className="flex items-center justify-between cursor-pointer">
            <span>Menu</span>
            <Icon icon={"system-uicons:chevron-down"} />
          </div>

          <div className="flex flex-col py-4 space-y-2 ">
            {menuItems.map((item) => (
              <Link key={item.id} className="" href={item.link}>
                <div className="flex items-center px-4 py-4 space-x-4 rounded-lg menuItem">
                  <Icon className="text-2xl" icon={item.icon} />
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex p-2 mt-3 space-x-2 rounded-lg bg-surface-tertiary w-max">
            <div
              onClick={() => toggleTheme("light", setTheme)}
              className={`flex items-center px-3 py-1 space-x-1 rounded-lg cursor-pointer ${
                theme === "light" && "mode-active-light"
              }`}
            >
              <Icon icon={"iconamoon:mode-light-light"} />
              <span>Light</span>
            </div>
            <div
              onClick={() => toggleTheme("dark", setTheme)}
              className={`flex items-center px-3 py-1 space-x-1 rounded-lg cursor-pointer ${
                theme === "dark" && "mode-active-dark"
              }`}
            >
              <Icon icon={"iconamoon:mode-dark-light"} />
              <span>Dark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;