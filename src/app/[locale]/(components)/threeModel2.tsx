"use client";
import React, { useLayoutEffect, useMemo } from "react";
import { useGLTF, useFBX, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";

export default function ThreeModel2() {
  const modelPath = "/slide_no_material.gltf";
  const gltf = useGLTF(modelPath);
  // @ts-ignore
  const { scene, nodes, materials } = gltf;

  const metallicTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/metal2_texture_map/Metal_scratched_009_metallic.jpg"
      ),
    []
  );
  const normalTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/metal2_texture_map/Metal_scratched_009_normal.jpg"
      ),
    []
  );
  const roughnessTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/metal2_texture_map/Metal_scratched_009_roughness.jpg"
      ),
    []
  );
  const ambientOcclusionTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/metal2_texture_map/Metal_scratched_009_ambientOcclusion.jpg"
      ),
    []
  );
  const heightTexture = useMemo(
    () =>
      new TextureLoader().load(
        "/texture_map_painted/Metal_scratched_009_height.jpg"
      ),
    []
  );
  const baseColorTexture = useMemo(
    () => new TextureLoader().load("/texture_map_painted/blue_map.jpg"),
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
        object.material.displacementMap = heightTexture;
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
    heightTexture,
    baseColorTexture,
    ambientOcclusionTexture,
  ]);

  return (
    <mesh position={[0, -5, 0]}>
      <primitive object={scene} scale={[0.25, 0.25, 0.25]} />
    </mesh>
  );
}
