import React from "react";
import { Sphere } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, BackSide } from "three";

import { threeDimensionalAssetPath } from "@/core/constants";
import { extend } from "@react-three/fiber";

extend({ TextureLoader, BackSide });

function RoomModel() {
  const texture = useLoader(
    TextureLoader,
    threeDimensionalAssetPath("textures/home.webp")
  );

  // Rotate texture 90 degrees around the y-axis
  // texture.center.set(0.5, 0.5);
  texture.repeat.x = -1;
  texture.offset.x = 1;
  // texture.rotation = Math.PI;

  return (
    <Sphere args={[100, 32, 32]}>
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={BackSide} // Apply texture to inside of sphere
      />
    </Sphere>
  );
}

export default RoomModel;
