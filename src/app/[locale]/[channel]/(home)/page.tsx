import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import { Canvas } from "@react-three/fiber";
import ThreeScene from "../../(components)/threeScene";

export default function HomePage() {
  return (
    <div className="flex  flex-col justify-center items-center h-main-height mt-header-margin w-full  bg-light-blue-main">
      <ThreeScene />
    </div>
  );
}
