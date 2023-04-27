"use client";
import { Canvas } from "@react-three/fiber";

export default function ThreeModel() {
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshLambertMaterial color="pink" attach="material" />
    </mesh>
  );
}
