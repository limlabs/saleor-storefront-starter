"use client";
import { Canvas } from "@react-three/fiber";
import { Euler, MathUtils } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../../../public/Windows.jpg";
import { OrbitControls, Stats, RoundedBox } from "@react-three/drei";

export default function ThreeModel() {
  const colorMap = useLoader(TextureLoader, texture.src);
  return (
    <mesh
      rotation={new Euler(MathUtils.degToRad(90), 0, MathUtils.degToRad(20))}
    >
      <boxGeometry attach="geometry" args={[5, 5, 5]} />
      <meshLambertMaterial attach="material" map={colorMap} />
    </mesh>
  );
}
