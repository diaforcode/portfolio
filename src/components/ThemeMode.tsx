"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {" "}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-white/20 transition"
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-yellow-400 hover:rotate-180 transition-transform duration-300" />
          ) : (
            <Moon className="w-6 h-6  hover:rotate-180 transition-transform duration-300" />
          )}
        </button>
      )}{" "}
    </div>
  );
};

export default ThemeMode;
