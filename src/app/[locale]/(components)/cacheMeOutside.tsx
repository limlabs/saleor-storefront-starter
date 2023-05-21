import Image from "next/image";

import Background from "../../../../public/cache_me_outside.png";

export default function CacheMeOutside() {
  return (
    <section className="-sm:hidden -lg:w-full   -md:h-1/3 -sm:shadow-none  -lg:h-full  -md:flex -lg:flex flex-col items-center justify-center  mt-0 bg-gradient-to-b    relative">
      <Image
        src={Background}
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute z-10"
      />
      <div className="w-5/6 z-20 flex justify-center items-center">
        <h1 className="text-white  text-xl font-futura -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 mt-6">
          Explore The
        </h1>
        <h1 className="text-white  text-xl font-futura -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold ml-4 mt-6">
          Frontier
        </h1>
      </div>
    </section>
  );
}
