"use client";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import ThreeModel from "./threeModel";
import {
  OrbitControls,
  Plane,
  Stars,
  Text3D,
  Text,
  Environment,
} from "@react-three/drei";
import HomeText from "./homeTextSection";

export default function ThreeScene() {
  return (
    <section className="z-10 w-4/5 h-4/5 shadow-shadow-hero">
      <Canvas className="w-4/5 h-1/2 bg-black" camera={{ position: [4, 7, 0] }}>
        <Environment preset="studio" background />
        <OrbitControls enableZoom={false} />
        {/* <Text scale={[3, 3, 3]} color="black" anchorX="center" anchorY="middle">
          Liminal
        </Text> */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 5, 2]} intensity={0.2} />
        {/* <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} /> */}
        <Suspense fallback={null}>
          <ThreeModel />
        </Suspense>
      </Canvas>
    </section>
  );
}
