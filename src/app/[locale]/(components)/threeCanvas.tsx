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
import ThreeModel2 from "./threeModel2";
import ThreePlane from "./threePlane";
import ThreeScene2 from "./threeScene2";
import { Color, PointLight, TextureLoader } from "three";
import { Backdrop } from "@react-three/drei";
import texture from "../../../../public/pano_office.png";

export default function ThreeCanvas() {
  const colorMap = useLoader(TextureLoader, texture.src);

  return (
    <section className="-sm:hidden -md:flex -lg:flex z-10 w-full h-2/3  max-w-full shadow-vertical-sm">
      <Canvas shadows resize={{ scroll: false }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />

        <Environment
          files="./img/liminal_hdr.hdr"
          background
          resolution={256}
        ></Environment>
        <Stage intensity={0.5} shadows="contact">
          <Suspense fallback={null}>
            <ThreeModel2 />
          </Suspense>
        </Stage>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </section>
  );
}
