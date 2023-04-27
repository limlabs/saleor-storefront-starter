"use client";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import ThreeModel from "./threeModel";

function Model() {
  const modelRef = useRef<Mesh>(null);
}

export default function ThreeScene() {
  return (
    <Canvas className="h-screen w screen">
      <ambientLight />
      <ThreeModel />
    </Canvas>
  );
}
