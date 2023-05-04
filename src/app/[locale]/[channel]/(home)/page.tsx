import Background from "../../../../../public/irridescent.jpg";
import Image from "next/image";
import ThreeScene from "../../(components)/threeScene";
import HomeMain from "../../(components)/homeMain";
import HomeHeroMobile from "../../(components)/homeHeroMobile";
import HomeSectionTwo from "../../(components)/homeSectionTwo";
import HomeSectionThree from "../../(components)/homeSectionThree";
import Footer from "../../(components)/footer";

export default function HomePage() {
  return (
    <main className="h-screen  w-screen  ">
      <HomeHeroMobile />
      <div className="h-main-height ">
        <ThreeScene />
        <HomeMain />
      </div>
      <div className="">
        <div className="h-screen bg-gradient-to-b  from-light-pink to-light-blue-main shadow-inset-shadow ">
          <HomeSectionTwo />
        </div>
        <div className="h-screen bg-gradient-to-b  from-forest-green to-light-pink shadow-inset-shadow text-almost-black">
          <HomeSectionThree />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
