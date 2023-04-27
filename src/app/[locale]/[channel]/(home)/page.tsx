import Background from "../../../../../public/irridescent.jpg";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import { Canvas } from "@react-three/fiber";
import ThreeScene from "../../(components)/threeScene";

export default function HomePage() {
  return (
    <div className="relative flex  flex-col justify-center items-center h-main-height mt-header-margin w-full  bg-light-blue-main">
      <Image
        src={Background}
        alt="background"
        fill
        className="brightness-90 filter blur-xsmall"
      />
      <ThreeScene />
    </div>
  );
}
