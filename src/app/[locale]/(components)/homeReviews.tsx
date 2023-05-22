import Image from "next/image";

import Checker from "../../../../public/Checkerboard_tile.png";

export default function HomeReviews() {
  return (
    <section className="-mt-10 pt-10 -sm:hidden -lg:w-full -md:h-1/3 -sm:shadow-none -lg:h-full -md:flex -lg:flex flex-col items-center justify-center relative bg-gradient-to-b from-light-pink to-light-blue-main">
      <div className="w-5/6 z-20 flex flex-col justify-center items-center">
        <div className="mr-32 mb-8">
          <h1 className="text-almost-black  text-xl font-roboto -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 mt-6">
            &quot;These folks are the real deal&quot;
          </h1>
          <p>-Jack Herrington</p>
        </div>
        <div className="ml-32 mb-8">
          <h1 className="text-almost-black  text-xl font-roboto -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 mt-6">
            &quot;These folks are the real deal&quot;
          </h1>
          <p>-Jack Herrington</p>
        </div>
        <div className="mr-32 mb-8">
          <h1 className="text-almost-black  text-xl font-roboto -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 mt-6">
            &quot;These folks are the real deal&quot;
          </h1>
          <p>-Jack Herrington</p>
        </div>
        <div className="ml-32 mb-8">
          <h1 className="text-almost-black  text-xl font-roboto -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 mt-6">
            &quot;These folks are the real deal&quot;
          </h1>
          <p>-Jack Herrington</p>
        </div>
      </div>
      <div className="mt-24 h-12 bottom-0 absolute  w-full right-52">
        <Image
          src={Checker}
          alt="squiggle w-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
