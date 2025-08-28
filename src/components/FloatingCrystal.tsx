// components/FloatingCrystal.tsx
"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

export default function FloatingCrystal() {
  const crystalRef = useRef<Mesh>(null);

  useFrame(() => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y += 0.005;
      crystalRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={crystalRef} position={[0, 0, 0]}>
      <dodecahedronGeometry args={[1.4, 0]} />
      <meshPhysicalMaterial
        color="#ffffff"
        transmission={1}
        thickness={0.6}
        roughness={0}
        metalness={0}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}
