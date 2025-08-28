"use server";

// import { useTheme } from "next-themes";
import {
  // FaSun,
  // FaMoon,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Skills from "./Skills";
import ThemeMode from "./ThemeMode";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Sun, Moon } from "lucide-react";
const Hero = async () => {
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => setMounted(true), []);

  return (
    <main
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden 
  bg-transparent 
  text-slate-900 dark:text-white 
  transition-colors duration-300"
    >
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 to-white/90 dark:from-black/60 dark:to-black/90" />{" "} */}
      {/* Theme Toggle Button */}
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 py-8 sm:py-16 max-w-md sm:max-w-5xl w-full mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 flex items-center justify-center">
          Hi, I'm Diyaa <ThemeMode />
        </h1>
        <p className="text-base sm:text-xl max-w-xs sm:max-w-2xl mx-auto mb-6">
          Full-stack developer crafting modern web experiences using React,
          Next.js, Node.js, and immersive 3D interfaces.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            asChild
            className="bg-cyan-500 hover:bg-cyan-600 text-white dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors focus:ring-2 focus:ring-cyan-300"
          >
            <a href="#projects">Projects</a>
          </Button>
          <Button
            asChild
            className="bg-cyan-500 hover:bg-cyan-600 text-white dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors focus:ring-2 focus:ring-cyan-300"
          >
            <a href="#education">Education</a>
          </Button>
          <Button
            asChild
            className="bg-cyan-500 hover:bg-cyan-600 text-white dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors focus:ring-2 focus:ring-cyan-300"
          >
            <a href="#experience">Experience</a>
          </Button>
          <Button
            asChild
            className="bg-cyan-500 hover:bg-cyan-600 text-white dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors focus:ring-2 focus:ring-cyan-300"
          >
            <a href="#contact">Contact</a>
          </Button>
          <Button
            asChild
            className="focus:ring-2 dark:focus:ring-black focus:ring-white"
          >
            <a href="#">Resume</a>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-12 text-2xl">
          <a
            href="https://github.com"
            target="_blank"
            aria-label="GitHub profile"
            className="hover:text-cyan-600 dark:hover:text-cyan-600 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            aria-label="linkedin profile"
            className="hover:text-cyan-600 dark:hover:text-cyan-600 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram profile"
            className="hover:text-cyan-600 dark:hover:text-cyan-600 transition-colors duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook profile"
            className="hover:text-cyan-600 dark:hover:text-cyan-600 transition-colors duration-200"
          >
            <FaFacebook />
          </a>
        </div>

        <Skills />

        {/* Scroll-down Indicator */}
        <div className="flex justify-center items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-600 dark:border-cyan-300 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-1 bg-cyan-600 dark:bg-cyan-300 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
