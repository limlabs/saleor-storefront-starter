import Background from "../../../../../public/irridescent.jpg";
import Breakroom from "../../../../../public/breakroom_no_logo.jpg";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import { Canvas } from "@react-three/fiber";
import ThreeScene from "../../(components)/threeScene";
import HomeMain from "../../(components)/homeMain";
import HomeHeroMobile from "../../(components)/homeHeroMobile";

export default function HomePage() {
  return (
    <div className="relative flex  flex-col justify-start items-center h-main-height mt-header-margin w-full  ">
      <Image
        src={Background}
        alt="background"
        fill
        className="brightness-90 filter blur-xsmall"
      />

      <ThreeScene />
      <HomeHeroMobile />
      <HomeMain />
    </div>
  );
}
