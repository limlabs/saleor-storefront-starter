"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import ThreeModel2 from "./threeModel2";
import ThreePlane from "./threePlane";
import ThreeScene2 from "./threeScene2";

export default function ThreeCanvas() {
  return (
    <section className="-sm:hidden -md:flex -lg:flex z-10 w-full h-2/3  max-w-full shadow-vertical-sm">
      <Canvas camera={{ fov: 100, position: [50, -50, 25] }} shadows>
        <ThreeScene2 />
      </Canvas>
    </section>
  );
}
