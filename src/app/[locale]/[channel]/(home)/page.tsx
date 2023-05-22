import HomeMain from "../../(components)/homeMain";
import HomeHeroMobile from "../../(components)/homeHeroMobile";
import HomeSectionTwo from "../../(components)/homeSectionTwo";
import HomeSectionThree from "../../(components)/homeSectionThree";
import Footer from "../../(components)/footer";
import ThreeCanvasWrapper from "../../(components)/threeCanvasWrapper";
import HomeReviews from "../../(components)/homeReviews";
import Sequencing from "../../(components)/sequencing";
import CacheMeOutside from "../../(components)/cacheMeOutside";
import StoreDemo from "../../(components)/storeDemo";

export default function HomePage() {
  return (
    <main className="h-screen  w-screen  relative">
      <div className="-sm:flex -sm:h-main-height -lg:hidden -md:hidden">
        <HomeHeroMobile />
      </div>
      <div className="relative -lg:h-screen -md:h-md-main-height  -sm:hidden -lg:flex -md:flex flex-col">
        <ThreeCanvasWrapper />
      </div>
      <div className="relative z-100 -lg:h-96 -md:h-md-main-height  -sm:hidden -lg:flex -md:flex flex-col justify-center items-center">
        <HomeMain />
      </div>
      <div>
        <div className="-lg:h-auto -md:h-md-screen bg-almost-black shadow-inset-shadow ">
          <HomeSectionTwo />
        </div>
        <div className=" relative z-100 -lg:h-screen -md:h-md-screen   text-almost-black">
          <HomeReviews />
        </div>
        <div className=" relative z-100 -lg:h-screen -md:h-md-screen   text-almost-black">
          <Sequencing />
        </div>
        <div className=" relative z-100 -lg:h-screen -md:h-md-screen   text-almost-black">
          <CacheMeOutside />
        </div>
        <div className=" relative z-100 -lg:h-screen -md:h-md-screen   text-almost-black">
          <StoreDemo />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
