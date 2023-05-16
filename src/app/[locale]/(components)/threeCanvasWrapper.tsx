import React from "react";
import dynamic from "next/dynamic";

const DynamicThreeCanvas = dynamic(() => import("./threeCanvas"), {
  ssr: false,
});

export default function ThreeCanvasWrapper() {
  return <DynamicThreeCanvas />;
}
