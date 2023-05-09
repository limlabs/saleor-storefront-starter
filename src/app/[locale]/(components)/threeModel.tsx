"use client";
import { Mesh } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../../../public/texture_logo.jpg";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useFBX, useTexture } from "@react-three/drei";

const modelPath = "/slideModel.fbx";

export default function ThreeModel() {
  const colorMap = useLoader(TextureLoader, texture.src);
  const meshRef = useRef<Mesh>(null);
  const slideModel = useFBX(modelPath);

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.01;
  //   }
  // });

  return (
    <mesh ref={meshRef} position={[0, -14, 0]}>
      <primitive
        ref={meshRef}
        object={slideModel}
        scale={[0.007, 0.007, 0.007]}
      />
    </mesh>
  );
}
