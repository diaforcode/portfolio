// components/Clouds.tsx
"use client";
import { useRef } from "react";
import { Mesh, Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function Clouds() {
  const group = useRef<Group>(null);
  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.0005;
  });

  const puff = (x: number, y: number, z: number, scale: number) => (
    <mesh key={`${x}-${y}-${z}`} position={[x, y, z]} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ffffff" roughness={0.8} />
    </mesh>
  );

  const positions: [number, number, number][] = [
    [-3, 1.5, -10],
    [2, 0, -8],
    [0, 2.5, -12],
    [4, 1.7, -9],
    [-2, 0.8, -11],
  ];

  return (
    <group ref={group}>
      {positions.map((p, i) => puff(...p, 1 + i * 0.2))}
    </group>
  );
}
