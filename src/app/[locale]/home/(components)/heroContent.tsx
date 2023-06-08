"use client";
import React, { FC, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";

import { threeDimensionalAssetPath } from "@/core/constants";
import SlideModel from "./slideModel";
import RoomModel from "./roomModel";
import { useSmoothScrollHandler } from "@/core/client/useSmoothScrollHandler";
import clsx from "clsx";

import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  MeshBasicMaterial,
  SphereGeometry,
  PointLight,
  AmbientLight,
  SpotLight,
  Group,
  Vector3,
  PerspectiveCamera as ThreePerspectiveCamera,
} from "three";
import { createRoot, extend } from "@react-three/fiber";

extend({
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  SphereGeometry,
  MeshStandardMaterial,
  PointLight,
  AmbientLight,
  SpotLight,
  Group,
  PerspectiveCamera: ThreePerspectiveCamera,
});

declare global {
  interface Window {
    cameraPosition: number;
  }
}

const lerpSpeed = 0.001;
const velocityDelta = 0.99;
const lowerLimit = -1; // Set this to your desired lower limit
let velocity = 0;
let lastScrollY = 0; // Initial scroll position
let lastCameraPosition = 0;

const HomeHeroContentScene = () => {
  useFrame(({ camera }) => {
    const deltaY = lastScrollY - window.scrollY;

    // Update the last scroll position
    lastScrollY = window.scrollY;

    // Add to velocity instead of assigning to position
    velocity += deltaY * 0.01;

    // Normalize velocity
    const normalizedVelocity = Math.max(-1, Math.min(1, velocity));

    if (!lastCameraPosition) {
      lastCameraPosition = 0;
    }

    // Interpolate towards the target position over time
    lastCameraPosition += (normalizedVelocity - lastCameraPosition) * lerpSpeed;

    // Slowly reduce velocity over time
    velocity *= velocityDelta;

    // move camera along y-axis
    camera.position.y += lastCameraPosition;
    // Set a lower limit for the camera's Y position

    camera.position.y = Math.max(camera.position.y, lowerLimit);

    if (camera.position.y > 0) {
      camera.position.y = 0;
    }

    //@ts-expect-error
    camera.fov = Math.max(60, Math.min(90, 90 + camera.position.y * 10));

    const cameraTarget = new Vector3(
      camera.position.y * Math.PI * 2,
      -camera.position.y * 1.4,
      1
    );

    camera.lookAt(cameraTarget);

    lastCameraPosition = 0;

    // this line might be necessary to apply the changes to the camera
    camera.updateProjectionMatrix();
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={70} />

      <Environment
        files={threeDimensionalAssetPath("environments/home.hdr")}
        background={true}
      />

      <ambientLight intensity={0.1} />

      <pointLight position={[10, 10, 10]} intensity={0.3} color="#FF15EC" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FF15EC" />
      <pointLight position={[10, -10, 10]} intensity={0.3} color="#FF15EC" />

      <spotLight
        position={[0, 10, 0]}
        angle={0.7}
        penumbra={0.3}
        intensity={0.4}
      />

      <SlideModel />
      <RoomModel />
    </>
  );
};

const InnerContent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || canvasRef.current.dataset.loaded === "true") {
      return;
    }

    createRoot(canvasRef.current).render(<HomeHeroContentScene />);
    canvasRef.current.dataset.loaded = "true";
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HomeHeroContent: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useSmoothScrollHandler(sectionRef, (section, position) => {
    const shrinkValue = Math.round(position * 0.05);
    section.style.transform = `translateY(${shrinkValue}px)`;
  });

  return (
    <>
      <section
        ref={sectionRef}
        className={clsx("z-10 w-full h-full max-w-full")}
      >
        <InnerContent />
      </section>
    </>
  );
};

export default HomeHeroContent;