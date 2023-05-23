import HomeMain from "../../(components)/exploreTheFrontier";
import HomeHeroMobile from "../../(components)/homeHeroMobile";
import HomeSectionTwo from "../../(components)/homeSectionTwo";
import HomeSectionThree from "../../(components)/homeSectionThree";
import Footer from "../../(components)/footer";
import ThreeCanvasWrapper from "../../(components)/threeCanvasWrapper";
import HomeReviews from "../../(components)/homeReviews";
import Sequencing from "../../(components)/sequencing";
import CacheMeOutside from "../../(components)/cacheMeOutside";
import StoreDemo from "../../(components)/storeDemo";
import ExploreTheFrontier from "../../(components)/exploreTheFrontier";

export default function HomePage() {
  return (
    <main className="relative bg-almost-black">
      <div className="-sm:flex -sm:h-main-height -lg:hidden -md:hidden">
        <HomeHeroMobile />
      </div>
      <div className="z-0 relative -lg:h-screen -md:h-md-main-height  -sm:hidden -lg:flex -md:flex flex-col">
        <ThreeCanvasWrapper />
      </div>
      <ExploreTheFrontier />
      <HomeSectionTwo />
      <HomeReviews />
      <Sequencing />
      <CacheMeOutside />
      <StoreDemo />

      <div>
        <Footer />
      </div>
    </main>
  );
}
