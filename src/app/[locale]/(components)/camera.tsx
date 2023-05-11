"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ThreeModel2 from "./threeModel2";

export default function Camera() {
  const angleToRadians = (degrees: number) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };

  const orbitControlsRef = useRef(null);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls minPolarAngle={60} maxPolarAngle={angleToRadians(80)} />
      <ThreeModel2 />
    </>
  );
}
