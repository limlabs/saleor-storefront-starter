import Image from "next/image";

import quote from "../../../../public/quote.png";
import { ContentSection } from "./contentSection";

export default function HomeReviews() {
  return (
    <ContentSection className="bg-gradient-to-b from-light-pink to-light-green">
      <div className="w-5/6 z-20 flex flex-col justify-center items-center">
        <div className="mr-80 mb-8">
          <div className="flex">
            <Image src={quote} height={30} width={30} alt="quote" />

            <h1 className="text-almost-black  text-xl font-roboto-mono -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4   mt-6">
              These folks are the real deal
            </h1>
          </div>

          <p>-Jack Herrington</p>
        </div>
        <div className="ml-80 mb-8">
          <h1 className="text-almost-black  text-xl font-roboto-mono  -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4   mt-6">
            &quot;These folks are the real deal&quot;
          </h1>
          <p>-Jack Herrington</p>
        </div>
        <div className="mr-80 mb-8">
          <h1 className="text-almost-black  text-xl font-roboto-mono -lg:text-4xl  -md:text-5xl -sm:mb-2  -md:mb-4   mt-6">
            &quot;These folks are the real deal&quot;
          </h1>
          <p>-Jack Herrington</p>
        </div>
        <div className="ml-80 mb-8">
          <h1 className="text-almost-black  text-xl font-roboto-mono -lg:text-4xl  -md:text-5xl  -sm:mb-2  -md:mb-4   mt-6">
            &quot;These folks are the real deal&quot;
          </h1>
          <p>-Jack Herrington</p>
        </div>
      </div>
      <div className="h-16 mt-28  w-screen  bg-checkerboard bg-50"></div>
    </ContentSection>
  );
}
