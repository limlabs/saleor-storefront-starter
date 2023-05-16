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
      <Canvas camera={{ fov: 75, position: [0, 0, 30] }}>
        <Environment
          files="./img/liminal_hdr.hdr"
          background
          resolution={270}
        ></Environment>
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[0, 7, 3]}
          intensity={0.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <spotLight
          position={[8, 13, 8]}
          angle={0.4}
          penumbra={1}
          intensity={0.7}
          castShadow
        />
        <Suspense fallback={null}>
          <ThreeModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </section>
  );
}
