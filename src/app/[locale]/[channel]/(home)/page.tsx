import Background from "../../../../../public/irridescent.jpg";
import Image from "next/image";
import ThreeScene from "../../(components)/threeScene";
import HomeMain from "../../(components)/homeMain";
import HomeHeroMobile from "../../(components)/homeHeroMobile";
import HomeSectionTwo from "../../(components)/homeSectionTwo";
import HomeSectionThree from "../../(components)/homeSectionThree";

export default function HomePage() {
  return (
    <main className="h-screen  w-screen  ">
      <HomeHeroMobile />
      <div className="h-screen ">
        <ThreeScene />
        <HomeMain />
      </div>
      <div className="bg-gradient-to-b  from-light-pink to-light-blue-main shadow-inset-shadow ">
        <div className="h-screen ">
          <HomeSectionTwo />
        </div>
        <div className="h-screen ">
          <HomeSectionThree />
        </div>
      </div>
    </main>
  );
}
