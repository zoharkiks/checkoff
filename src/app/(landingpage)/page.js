"use client";

import { useEffect } from "react";
import { useThemeStore } from "../store";
import { setUserPreferenceTheme } from "../utils/setTheme";
import Heading from "./_components/Heading";


export default function Home() {

  const [theme, setTheme] = useThemeStore((state) => [
    state.theme,
    state.setTheme,
  ]);

  

  useEffect(() => {
    setUserPreferenceTheme(null,setTheme);
  }, []);

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-surface-secondary padding">
      <Heading />
    </div>
  );
}
