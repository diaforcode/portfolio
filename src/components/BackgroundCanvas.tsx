"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import Moon from "./Moon";
import { useTheme } from "next-themes";

export default function BackgroundCanvas() {
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/soft-sky_2.jpg')`, // Use a nice pastel cloud image
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        style={{ background: theme === "light" ? "#ffffff" : "#000000" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Moon />
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
