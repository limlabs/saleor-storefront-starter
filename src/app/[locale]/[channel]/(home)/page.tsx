import HomeMain from "../../(components)/homeMain";
import HomeHeroMobile from "../../(components)/homeHeroMobile";
import HomeSectionTwo from "../../(components)/homeSectionTwo";
import HomeSectionThree from "../../(components)/homeSectionThree";
import Footer from "../../(components)/footer";
import ThreeCanvasWrapper from "../../(components)/threeCanvasWrapper";

export default function HomePage() {
  return (
    <main className="h-screen  w-screen  ">
      <div className="-sm:flex -sm:h-main-height -lg:hidden -md:hidden">
        <HomeHeroMobile />
      </div>
      <div className="-lg:h-screen -md:h-md-main-height  -sm:hidden -lg:flex -md:flex flex-col">
        <ThreeCanvasWrapper />
        <HomeMain />
      </div>
      <div>
        <div className="-lg:h-screen -md:h-md-screen bg-gradient-to-b  from-light-pink to-light-blue-main shadow-inset-shadow ">
          <HomeSectionTwo />
        </div>
        <div className="-lg:h-screen -md:h-md-screen bg-gradient-to-b  from-forest-green to-light-pink shadow-inset-shadow text-almost-black">
          <HomeSectionThree />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
