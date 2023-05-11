"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function ThreeModel2() {
  const modelPath = "/LIMINAL_v9.gltf";
  const { scene } = useGLTF(modelPath);
  const angleToRadians = (degrees: number) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };

  return (
    <>
      <mesh position={[0, -4.5, 0]} castShadow>
        <primitive object={scene} scale={[0.25, 0.25, 0.25]} />
      </mesh>
    </>
  );
}
