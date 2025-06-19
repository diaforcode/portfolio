// components/BackgroundCanvas.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Stars
          radius={100}
          depth={50}
          // count={5000}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
