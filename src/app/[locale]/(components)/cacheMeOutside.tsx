import Button from "@/app/daisyui/button";
import Image from "next/image";

import AI from "../../../../public/cache_me_outside.png";
import { ContentSection } from "./contentSection";

export default function CacheMeOutside() {
  return (
    <ContentSection className="bg-gradient-to-b from-light-pink to-light-blue-main flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-between">
        <div className="h-96 bg-forest-green w-5/6 flex shadow-shadow-sm self-center mt-40">
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
      </div>
      <div className="h-12 mt-40 w-full bg-checkerboard bg-50"></div>
    </ContentSection>
  );
}
