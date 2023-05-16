"use client";
import { Mesh } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../../../../public/pano_office.png";
import floor from "../../../../public/astro_turf.jpg";
import ceiling from "../../../../public/night_sky.jpg";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const modelPath = "/LIMINAL_v9.gltf";

export default function ThreeRoom() {
  const colorMap = useLoader(TextureLoader, texture.src);
  const floorTexture = useLoader(TextureLoader, floor.src);
  const ceilingTexture = useLoader(TextureLoader, ceiling.src);
  // colorMap.wrapS = THREE.RepeatWrapping;
  // colorMap.wrapT = THREE.RepeatWrapping;
  // colorMap.repeat.set(0.75, 0.75);
  const meshRef = useRef<Mesh>(null);
  const { scene } = useGLTF(modelPath);

  const angleToRadians = (degrees: number) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };

  return (
    <>
      {/* Floor */}
      <mesh
        rotation={[-angleToRadians(90), 0, 0]}
        position={[0, -50, 0]}
        receiveShadow
      >
        <planeGeometry args={[125, 125]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>

      {/* Ceiling */}
      <mesh
        rotation={[angleToRadians(90), 0, 0]}
        position={[0, 50, 0]}
        receiveShadow
      >
        <planeGeometry args={[125, 125]} />
        <meshStandardMaterial map={ceilingTexture} />
      </mesh>

      {/* Front Wall */}
      <mesh position={[0, 0, -50]} receiveShadow>
        <planeGeometry args={[125, 125]} />
        <meshStandardMaterial
          // color="rgb(157, 255, 212)"
          side={THREE.DoubleSide}
          map={colorMap}
        />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 0, 50]} receiveShadow>
        <planeGeometry args={[125, 125]} />
        <meshStandardMaterial
          // color="rgb(157, 255, 212)"
          side={THREE.DoubleSide}
          map={colorMap}
        />
      </mesh>

      {/* Left Wall */}
      <mesh
        rotation={[0, angleToRadians(90), 0]}
        position={[-50, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[125, 125]} />
        <meshStandardMaterial
          // color="rgb(157, 255, 212)"
          side={THREE.DoubleSide}
          map={colorMap}
        />
      </mesh>

      {/* Right Wall */}
      <mesh
        rotation={[0, angleToRadians(90), 0]}
        position={[50, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[125, 125]} />
        <meshStandardMaterial
          // color="rgb(157, 255, 212)"
          side={THREE.DoubleSide}
          map={colorMap}
        />
      </mesh>
    </>
  );
}
