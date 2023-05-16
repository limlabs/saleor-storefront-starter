import React from "react";
import dynamic from "next/dynamic";

const DynamicThreeModelComponent = dynamic(() => import("./threeModel"), {
  ssr: false,
});

export default function ThreeModelWrapper() {
  return <DynamicThreeModelComponent />;
}
