"use client";
import { Mesh } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../../../public/texture_logo.jpg";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useGLTF, useTexture } from "@react-three/drei";

const modelPath = "/LIMINAL_v9.gltf";

export default function ThreeModel() {
  const colorMap = useLoader(TextureLoader, texture.src);
  const meshRef = useRef<Mesh>(null);
  const { scene } = useGLTF(modelPath);

  return (
    <mesh ref={meshRef} position={[0, -16, 0]}>
      <primitive ref={meshRef} object={scene} scale={[0.75, 0.75, 0.75]} />
    </mesh>
  );
}
