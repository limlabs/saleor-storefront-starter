"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  Stage,
} from "@react-three/drei";
import { Color, PointLight, TextureLoader } from "three";
import { Backdrop } from "@react-three/drei";
import texture from "../../../../public/pano_office.png";
// import ThreeModel from "./threeModel";
import dynamic from "next/dynamic";

const ThreeModelWrapper = dynamic(() => import("./threeModelWrapper"), {
  ssr: false,
});

export default function ThreeCanvas() {
  const colorMap = useLoader(TextureLoader, texture.src);

  return (
    <section className="-sm:hidden -md:flex -lg:flex z-10 w-full h-2/3  max-w-full shadow-vertical-sm">
      <Canvas shadows resize={{ scroll: false }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />

        <Environment
          files="./img/liminal_hdr.hdr"
          background
          resolution={1080}
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
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </section>
  );
}
