import { ContentSection } from "@/app/[locale]/(components)/contentSection";
import clsx from "clsx";

import Image from "next/image";
import { FC } from "react";

const PhotoIcon = () => {
  return (
    <div className="relative z-20 -sm:w-[200px] -sm:mt-10 -sm:h-[200px] -md:w-[300px] -md:h-[300px] -md:mt-0 transition-opacity">
      <Image
        src={"/img/home/photo_frame.svg"}
        width={300}
        height={300}
        alt={""}
        className="absolute"
      />
      <Image
        src={"/img/home/jherr.png"}
        width={300}
        height={300}
        alt={""}
        className="absolute"
      />
    </div>
  );
};

export const Testimonials: FC = () => {
  return (
    <ContentSection
      className={clsx(
        "bg-gradient-to-b",
        "from-light-pink",
        "to-light-green",
        "relative",
        "z-20",
        "items-center",
        "after:bg-checkerboard",
        "after:bg-repeat",
        "after:bg-checker-lg",
        'after:contents-[""]',
        "after:block",
        "after:h-[75px]",
        "after:relative",
        "after:w-full",
        "after:bottom-0"
      )}
    >
      <Image
        src={"/img/home/pink_squiggle.png"}
        alt="pink squiggle image"
        width={15896}
        height={1859}
        className="absolute w-full bottom-[99%]"
      />
      <div className="flex -sm:flex-col -md:flex-row w-full max-w-5xl justify-between items-center -md:px-8 -lg:px-0">
        <PhotoIcon />
        <div className="flex flex-col justify-center -sm:px-4 items-center my-14 w-full max-w-3xl">
          <div className="flex">
            <h1 className="text-9xl font-serif text-hot-pink relative top-[-20px]">
              &quot;
            </h1>
            <h1 className="text-almost-black  -sm:text-lg font-mono -md:text-4xl -sm:mb-0 -md:mb-4 -sm:leading-[160%] -md:leading-[160%] -lg:leading-[160%]">
              The folks at Liminal are highly skilled, productive, and reliable.
              Best of all, they are always up for a challenge!
              <p className="font-roboto -md:text-2xl -sm:text-lg mt-4">
                <span className="font-extrabold">-- Jack Herrington</span>, Blue
                Collar Coder
              </p>
            </h1>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};
