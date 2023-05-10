"use client";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import ThreeModel from "./threeModel";
import { OrbitControls, Environment } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <section className="-sm:hidden -md:flex -lg:flex z-10 w-full h-2/3  max-w-full shadow-vertical-sm">
      <Canvas camera={{ fov: 75, position: [0, 0, 35] }}>
        <Environment files="./img/neon_studio.hdr" background blur={0.05} />
        <Suspense fallback={null}>
          <ThreeModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
