import Image from "next/image";

import quote from "../../../../public/quote.png";
import { ContentSection } from "./contentSection";

export default function HomeReviews() {
  return (
    <ContentSection className="bg-gradient-to-b from-light-pink to-light-green ">
      <div className="w-5/6 z-20 flex flex-col justify-center items-center -sm:mt-14">
        <div className="mr-80 -sm:mr-4 mb-8">
          <div className="flex">
            <h1 className="text-9xl font-garamond text-hot-pink">&quot;</h1>
            <h1 className="text-almost-black  text-2xl font-roboto-mono -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4   mt-6">
              These folks are the real deal
            </h1>
          </div>

          <p className="font-roboto text-lg ml-12">-Jack Herrington</p>
        </div>
        <div className="ml-80 -sm:ml-4 mb-8">
          <div className="flex">
            <h1 className="text-9xl font-garamond text-hot-pink">&quot;</h1>
            <h1 className="text-almost-black  text-2xl font-roboto-mono -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4   mt-6">
              These folks are the real deal
            </h1>
          </div>
          <p className="font-roboto text-lg ml-12">-Jack Herrington</p>
        </div>
        <div className="mr-80 -sm:mr-4 mb-8">
          <div className="flex">
            <h1 className="text-9xl font-garamond text-hot-pink">&quot;</h1>
            <h1 className="text-almost-black  text-2xl font-roboto-mono -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4   mt-6">
              These folks are the real deal
            </h1>
          </div>
          <p className="font-roboto text-lg ml-12">-Jack Herrington</p>
        </div>
        <div className="ml-80 -sm:ml-4 mb-8">
          <div className="flex">
            <h1 className="text-9xl font-garamond text-hot-pink">&quot;</h1>
            <h1 className="text-almost-black  text-2xl font-roboto-mono -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4   mt-6">
              These folks are the real deal
            </h1>
          </div>
          <p className="font-roboto text-lg ml-12">-Jack Herrington</p>
        </div>
      </div>
      <div className="h-12 mt-28  w-screen  bg-checkerboard bg-50"></div>
    </ContentSection>
  );
}
