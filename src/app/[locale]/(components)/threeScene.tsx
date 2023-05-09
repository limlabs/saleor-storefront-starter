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
  Stats,
} from "@react-three/drei";
import HomeText from "./homeTextSection";

export default function ThreeScene() {
  return (
    <section className="-sm:hidden -md:flex -lg:flex z-10 w-full h-2/3  max-w-full shadow-vertical-sm">
      <Canvas camera={{ fov: 75, position: [0, 0, 30] }}>
        <Environment files="./img/bridge.hdr" background blur={0} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 5, 2]} intensity={0.4} />

        <Suspense fallback={null}>
          <ThreeModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
