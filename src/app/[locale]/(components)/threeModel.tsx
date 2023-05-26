"use client";
import React, { useLayoutEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { useThree } from "@react-three/fiber";

export default function ThreeModel() {
  const modelPath = "/slide2.gltf";
  const gltf = useGLTF(modelPath);
  // @ts-ignore
  const { scene } = gltf;
  const { size } = useThree();

  console.log(scene);

  let scale;
  let position;
  if (size.width < 500) {
    scale = 0.2;
    position = [0, -4, 0];
  } else if (size.width < 800) {
    scale = 0.2;
    position = [0, -4, 0];
  } else {
    scale = 0.25;
    position = [0, -5, 0];
  }

  const metallicTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/Metal_Gold_001_SD/Metal_Gold_001_metallic.jpg"
      ),
    []
  );
  const normalTexture = useMemo(
    () =>
      new TextureLoader().load("/Metal_Gold_001_SD/Metal_Gold_001_normal.jpg"),
    []
  );
  const roughnessTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/Metal_Gold_001_SD/Metal_Gold_001_roughness.jpg"
      ),
    []
  );
  const ambientOcclusionTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/Metal_Gold_001_SD/Metal_Gold_001_ambientOcclusion.jpg"
      ),
    []
  );

  const baseColorTexture = useMemo(
    () => new TextureLoader().load("/base_color/Slide_teal_gradient_4.jpg"),
    []
  );

  useLayoutEffect(() => {
    scene.traverse((object) => {
      // @ts-ignore
      if (object.isMesh && object.material.name === "scratched plastic") {
        // @ts-ignore
        object.material.map = baseColorTexture;
        // @ts-ignore
        object.material.metalnessMap = metallicTexture;
        // @ts-ignore
        object.material.normalMap = normalTexture;
        // @ts-ignore
        object.material.roughnessMap = roughnessTexture;
        // @ts-ignore
        object.material.aoMap = ambientOcclusionTexture;
        // @ts-ignore
        object.material.needsUpdate = true;
      }
    });
  }, [
    scene,
    metallicTexture,
    normalTexture,
    roughnessTexture,
    // heightTexture,
    baseColorTexture,
    ambientOcclusionTexture,
  ]);

  return (
    <mesh position={position}>
      <primitive object={scene} scale={[scale, scale, scale]} />
    </mesh>
  );
}
