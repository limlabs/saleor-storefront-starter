"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import ThreeModel from "./threeModel";
import { OrbitControls, Plane } from "@react-three/drei";
import HomeText from "./homeTextSection";

function Model() {
  const modelRef = useRef<Mesh>(null);
}

function LightScene() {
  return (
    <>
      <Plane scale={10} rotation-x={-Math.PI / 2} position-y={-2} />
    </>
  );
}

export default function ThreeScene() {
  return (
    <>
      <HomeText />
      <Canvas
        className="w-screen h-2/4 bg-transparent"
        camera={{ position: [4, 7, 0] }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 5, 2]} intensity={0.2} />
        {/* <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} /> */}
        <Suspense fallback={null}>
          <ThreeModel />
        </Suspense>
      </Canvas>
    </>
  );
}
