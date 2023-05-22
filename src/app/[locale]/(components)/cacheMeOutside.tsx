import Button from "@/app/daisyui/button";
import Image from "next/image";

import AI from "../../../../public/cache_me_outside.png";
import Checker from "../../../../public/Checkerboard_tile.png";

export default function CacheMeOutside() {
  return (
    <section className="relative -sm:hidden -lg:w-full   -md:h-1/3 -sm:shadow-none  -lg:h-full  -md:flex -lg:flex flex-col items-end justify-center  mt-0 bg-light-green   ">
      <div className="h-96 bg-forest-green w-5/6 grid grid-cols-2">
        <div className="w-5/6 z-20 flex flex-col justify-center items-center">
          <h1 className=" ml-12 font-futura text-light-blue-main -lg:text-8xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold  mt-6">
            CACHE ME OUTSIDE
          </h1>
          <Button variant="primary">CHECK OUT OUR COMMUNITY</Button>
        </div>
        <div>
          <Image
            src={AI}
            alt="AI team"
            height={384}
            className="absolute z-10"
          />
        </div>
      </div>
      <div className="absolute mt-16 h-12 bottom-0 w-full bg-checker bg-repeat-x"></div>
    </section>
  );
}
