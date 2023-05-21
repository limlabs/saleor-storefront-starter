import Button from "@/app/daisyui/button";
import Image from "next/image";

import Background from "../../../../public/cache_me_outside.png";

export default function CacheMeOutside() {
  return (
    <section className="-sm:hidden -lg:w-full   -md:h-1/3 -sm:shadow-none  -lg:h-full  -md:flex -lg:flex flex-col items-center justify-center  mt-0 bg-almost-black    relative">
      <Image
        src={Background}
        alt="background"
        height={400}
        className="absolute z-10"
      />
      <div className="w-5/6 z-20 flex flex-col justify-center items-center">
        <h1 className="text-white  text-xl font-futura -lg:text-12xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 mt-6">
          CACHE ME OUTSIDE
        </h1>
        <Button variant="secondary">CHECK OUT OUR COMMUNITY</Button>
      </div>
    </section>
  );
}
