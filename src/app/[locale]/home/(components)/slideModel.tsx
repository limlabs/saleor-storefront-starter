"use client";
import React, {
  FC,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, MathUtils, Mesh, TextureLoader, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { threeDimensionalAssetPath } from "@/core/constants";

import { extend } from "@react-three/fiber";

extend({ Box3, MathUtils, TextureLoader, Vector3, Mesh });

export const positionSmall = new Vector3(0, -4, 0);
const scaleSmall = 0.2;
export const positionLarge = new Vector3(0, -5, 0);
const scaleLarge = 0.25;

const SlideModel: FC = () => {
  const modelPath = threeDimensionalAssetPath("models/slide.gltf");
  const gltf = useGLTF(modelPath);
  // @ts-ignore
  const { scene } = gltf;
  const { size } = useThree();

  let scale;
  let position;
  if (size.width < 800) {
    scale = scaleSmall;
    position = positionSmall;
  } else {
    scale = scaleLarge;
    position = positionLarge;
  }

  const metallicTexture = useMemo(
    () =>
      new TextureLoader().load(
        threeDimensionalAssetPath("materials/slide/metallic.webp")
      ),
    []
  );
  const normalTexture = useMemo(
    () =>
      new TextureLoader().load(
        threeDimensionalAssetPath("materials/slide/normal.jpg")
      ),
    []
  );
  const roughnessTexture = useMemo(
    () =>
      new TextureLoader().load(
        threeDimensionalAssetPath("materials/slide/roughness.jpg")
      ),
    []
  );
  const ambientOcclusionTexture = useMemo(
    () =>
      new TextureLoader().load(
        threeDimensionalAssetPath("materials/slide/ambientOcclusion.jpg")
      ),
    []
  );
  const baseColorTexture = useMemo(
    () =>
      new TextureLoader().load(
        threeDimensionalAssetPath("materials/slide/basecolor.webp")
      ),
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
    baseColorTexture,
    ambientOcclusionTexture,
  ]);

  const mesh = useRef<Mesh>(null!);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // function to convert the mouse position to rotation
  const mouseToRotation = (event: PointerEvent) => {
    // const x = (((event.clientY + 250) / window.innerWidth) * 2 - 1) * Math.PI;
    const y = -(((event.clientX - 400) / window.innerHeight) * 2 - 1) * Math.PI;
    return {
      x: 0,
      y: Math.max(-Math.PI / 7, Math.min(Math.PI / 7, y)),
    };
  };

  useEffect(() => {
    // add the mouse move listener
    window.addEventListener("pointermove", (event) => {
      const rot = mouseToRotation(event);
      setRotation(rot);
    });

    // clean up the listener when the component is unmounted
    return () => {
      window.removeEventListener("pointermove", mouseToRotation);
    };
  }, []);

  useFrame(() => {
    // check if the mesh and mesh current are available
    if (mesh && mesh.current) {
      // lerp the rotation of the mesh to the mouse rotation
      mesh.current.rotation.x = MathUtils.lerp(
        mesh.current.rotation.x,
        rotation.x,
        0.1
      );
      mesh.current.rotation.y = MathUtils.lerp(
        mesh.current.rotation.y,
        rotation.y,
        0.1
      );
    }
  });

  return (
    <mesh position={position} ref={mesh}>
      <primitive object={scene} scale={[scale, scale, scale]} />
    </mesh>
  );
};

export default SlideModel;
