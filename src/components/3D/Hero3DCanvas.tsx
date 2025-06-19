// "use client";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars, Sphere } from "@react-three/drei";
// import { TextureLoader } from "three";

// function TexturedMoon() {
//   const [colorMap, normalMap, displacementMap] = useLoader(TextureLoader, [
//     "/textures/moon_diffuse.jpg",
//     "/textures/moon_normal.jpg",
//     "/textures/moon_displacement.jpg",
//   ]);

//   useFrame((state, delta) => {
//     meshRef.current.rotation.y += delta * 0.05;
//   });

//   const meshRef = useFrame(() => {}) as any;

//   return (
//     <mesh ref={meshRef}>
//       <Sphere args={[1.5, 128, 128]}>
//         <meshStandardMaterial
//           map={colorMap}
//           normalMap={normalMap}
//           displacementMap={displacementMap}
//           displacementScale={0.1}
//           roughness={1}
//           metalness={0}
//         />
//       </Sphere>
//     </mesh>
//   );
// }

// export function Hero3DCanvas() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[5, 0, 5]} intensity={1} />
//       <Stars radius={100} depth={50} count={5000} saturation={0} fade speed={1} />
//       <TexturedMoon />
//       <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
//     </Canvas>
//   );
// }
