"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Euler, MathUtils, Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../../../public/texture_logo.jpg";
import {
  OrbitControls,
  Stats,
  RoundedBox,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useRef } from "react";

export default function ThreeModel() {
  const colorMap = useLoader(TextureLoader, texture.src);
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x = +0.01;
    meshRef.current.rotation.y = +0.01;
  });

  return (
    <mesh ref={meshRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxGeometry args={[10, 10, 10]} />
      {/* <sphereGeometry args={[7, 26, 26]} /> */}
      <meshPhongMaterial map={colorMap} />
    </mesh>
  );
}
