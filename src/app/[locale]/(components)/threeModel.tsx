"use client";
import { Canvas } from "@react-three/fiber";
import { Euler, MathUtils } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../../../public/future-texture.jpg";

export default function ThreeModel() {
  const colorMap = useLoader(TextureLoader, texture.src);
  return (
    <mesh
      rotation={new Euler(MathUtils.degToRad(90), 0, MathUtils.degToRad(20))}
    >
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" map={colorMap} />
    </mesh>
  );
}
