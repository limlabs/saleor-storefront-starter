import Button from "@/app/daisyui/button";
import Image from "next/image";
import Link from "next/link";

import AI from "../../../../public/cache_me_outside.png";
import { ContentSection } from "./contentSection";

export default function CacheMeOutside() {
  return (
    <ContentSection className="-lg:bg-gradient-to-b from-light-pink to-light-blue-main -sm:bg-forest-green flex flex-col justify-center items-center -sm:pb-24 -lg:pb-0">
      <div className="h-96 -lg:bg-forest-green -sm:bg-transparent w-5/6 flex -lg:flex-row -sm:flex-col-reverse -lg:shadow-shadow-sm self-center mt-36">
        <div className="-lg:w-5/6 z-20 flex flex-col justify-center items-center">
          <h1 className=" -lg:ml-12 font-futura text-light-blue-main -sm:text-3xl  -lg:text-8xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold  mt-6">
            CACHE ME OUTSIDE
          </h1>
          <div className="mt-4">
            <Link href="/talk">
              <Button variant="secondary">GET IN CONTACT</Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={AI}
            alt="AI team"
            height={384}
            className="-lg:absolute z-10"
          />
        </div>
      </div>
      <div className="h-12 mt-40 w-full bg-checkerboard bg-50 -sm:hidden -lg:block"></div>
    </ContentSection>
  );
}
