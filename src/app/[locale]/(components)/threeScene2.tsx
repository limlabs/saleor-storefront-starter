"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ThreeModel2 from "./threeModel2";
import ThreePlane from "./threePlane";

export default function ThreeScene2() {
  const modelGroupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<any>(null);

  // useFrame(() => {
  //   if (modelGroupRef.current && controlsRef.current) {
  //     controlsRef.current.target.copy(modelGroupRef.current.position);
  //     controlsRef.current.update();
  //   }
  // });

  const { camera } = useThree();

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -1, 15]} />
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

      <group ref={modelGroupRef}>
        <ThreeModel2 />
        <ThreeModel2 />
      </group>
      <OrbitControls ref={controlsRef} camera={camera} />

      <ThreePlane />
    </>
  );
}
