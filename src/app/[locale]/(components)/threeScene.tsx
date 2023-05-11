"use client";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import ThreeModel from "./threeModel";
import { OrbitControls, Environment, Lightformer } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <section className="-sm:hidden -md:flex -lg:flex z-10 w-full h-2/3  max-w-full shadow-vertical-sm">
      <Canvas camera={{ fov: 100, position: [0, 0, 25] }}>
        {/* <Environment
          files="./img/studio_small.hdr"
          background
          resolution={1080}
        ></Environment> */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <ThreeModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </section>
  );
}
