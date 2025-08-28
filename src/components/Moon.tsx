"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export default function Moon() {
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
