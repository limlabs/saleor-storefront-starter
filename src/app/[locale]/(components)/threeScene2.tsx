"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ThreeModel2 from "./threeModel2";
import ThreePlane from "./threePlane";

export default function ThreeScene2() {
  const angleToRadians = (degrees: number) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };

  return (
    <section className="-sm:hidden -md:flex -lg:flex z-10 w-full h-2/3  max-w-full shadow-vertical-sm">
      <Canvas camera={{ fov: 100, position: [50, -50, 25] }} shadows>
        <PerspectiveCamera makeDefault position={[0, -1, 15]} />
        <OrbitControls />
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
        <spotLight
          position={[-8, 13, -8]}
          angle={-0.4}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        <ThreeModel2 />
        <ThreeModel2 />
        <ThreePlane />
      </Canvas>
    </section>
  );
}
