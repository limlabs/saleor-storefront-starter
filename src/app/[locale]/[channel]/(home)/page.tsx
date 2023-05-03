import Background from "../../../../../public/irridescent.jpg";
import Image from "next/image";
import ThreeScene from "../../(components)/threeScene";
import HomeMain from "../../(components)/homeMain";
import HomeHeroMobile from "../../(components)/homeHeroMobile";

export default function HomePage() {
  return (
    <main className="h-main-height  w-full  ">
      <ThreeScene />

      <HomeHeroMobile />

      <HomeMain />
    </main>
  );
}
