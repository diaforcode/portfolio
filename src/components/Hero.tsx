"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { Button } from "@/components/ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaMoon,
} from "react-icons/fa";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import Skills from "./Skills";

function Moon() {
  const [colorMap, normalMap, displacementMap] = useLoader(TextureLoader, [
    "/textures/moon_color.jpg",
    "/textures/moon_normal.jpg",
    "/textures/moon_displacement.jpg",
  ]);

  const moonRef = useRef<Mesh>(null);

  return (
    <mesh ref={moonRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.55, 64, 64]} />
      <meshBasicMaterial color="white" transparent opacity={0.05} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        displacementMap={displacementMap}
        displacementScale={0.05}
        roughness={1}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white flex flex-col justify-center items-center overflow-hidden ">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Moon />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl w-full">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 flex items-center justify-center gap-2">
          Hi, I'm Diyaa <FaMoon className="text-cyan-300 animate-pulse" />
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Full-stack developer crafting modern web experiences using React,
          Next.js, Node.js, and immersive 3D interfaces.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button asChild className="hover:bg-cyan-600">
            <a href="#projects">Projects</a>
          </Button>
          <Button asChild className=" hover:bg-cyan-600">
            <a href="#education">Education</a>
          </Button>
          <Button asChild className=" hover:bg-cyan-600">
            <a href="#experience">Experience</a>
          </Button>
          <Button asChild className=" hover:bg-cyan-600">
            <a href="#contact">Contact</a>
          </Button>
          <Button variant="outline" asChild className="text-black">
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-12 text-2xl">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-cyan-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-cyan-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-cyan-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-cyan-300"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Embedded Skills */}

        <Skills />

        {/* Scroll-down Indicator */}
        <div className="flex justify-center items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-300 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-1 bg-cyan-300 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
}
