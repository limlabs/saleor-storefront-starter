import HomeMain from "../../(components)/exploreTheFrontier";
import HomeHeroMobile from "../../(components)/homeHeroMobile";
import HomeSectionTwo from "../../(components)/sensibleChoice";
import HomeSectionThree from "../../(components)/homeSectionThree";
import Footer from "../../(components)/footer";
import ThreeCanvasWrapper from "../../(components)/threeCanvasWrapper";
import HomeReviews from "../../(components)/homeReviews";
import Sequencing from "../../(components)/sequencing";
import CacheMeOutside from "../../(components)/cacheMeOutside";
import StoreDemo from "../../(components)/storeDemo";
import ExploreTheFrontier from "../../(components)/exploreTheFrontier";
import SensibleChoice from "../../(components)/sensibleChoice";
import SeeWhatsPossible from "../../(components)/seeWhatsPossible";

export default function HomePage() {
  return (
    <main className="relative bg-almost-black">
      <div className="z-0 relative -lg:h-main-height -md:h-md-main-height  -sm:h-main-height -lg:flex -md:flex flex-col">
        <ThreeCanvasWrapper />
      </div>
      <ExploreTheFrontier />
      <SensibleChoice />
      <HomeReviews />
      <SeeWhatsPossible />
      {/* <Sequencing /> */}
      <CacheMeOutside />
      {/* <StoreDemo /> */}

      <div>
        <Footer />
      </div>
    </main>
  );
}
