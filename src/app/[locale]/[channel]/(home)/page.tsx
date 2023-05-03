import Background from "../../../../../public/irridescent.jpg";
import Image from "next/image";
import ThreeScene from "../../(components)/threeScene";
import HomeMain from "../../(components)/homeMain";
import HomeHeroMobile from "../../(components)/homeHeroMobile";

export default function HomePage() {
  return (
    <main className="h-full  w-full -lg:flex-row -md:flex-row justify-center bg-gradient-to-b  from-light-pink to-light-blue-main mt-header-margin max-w-full">
      <ThreeScene />

      <HomeHeroMobile />

      <HomeMain />
    </main>
  );
}
