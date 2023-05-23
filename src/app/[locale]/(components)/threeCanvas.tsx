"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import dynamic from "next/dynamic";

const ThreeModelWrapper = dynamic(() => import("./threeModelWrapper"), {
  ssr: false,
});

export default function ThreeCanvas() {
  return (
    <section className="-sm:hidden -md:flex -lg:flex z-0 w-full h-full  max-w-full shadow-vertical-sm">
      <Canvas shadows resize={{ scroll: false }}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

        <Environment
          files="./img/lim360.hdr"
          background
          resolution={1080}
          frames={Infinity}
        ></Environment>

        {/* Ambient light source */}
        <ambientLight intensity={0.1} />

        {/* Point light sources */}
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#FF15EC" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.3}
          color="#FF15EC"
        />
        <pointLight position={[10, -10, 10]} intensity={0.3} color="#FF15EC" />

        {/* Spotlight */}
        <spotLight
          position={[0, 10, 0]}
          angle={0.7}
          penumbra={0.3}
          intensity={0.4}
        />

        <Suspense fallback={null}>
          <ThreeModelWrapper />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </section>
  );
}
