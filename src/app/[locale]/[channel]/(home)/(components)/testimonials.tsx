import { ContentSection } from "@/app/[locale]/(components)/contentSection";
import clsx from "clsx";

import Image from "next/image";
import { FC } from "react";

export const Testimonials: FC = () => {
  return (
    <ContentSection
      className={clsx(
        "bg-gradient-to-b",
        "from-light-pink",
        "to-light-green",
        "relative",
        "after:bg-checkerboard",
        "after:bg-repeat",
        "after:bg-50",
        'after:contents-[""]',
        "after:block",
        "after:h-[50px]",
        "after:relative",
        "after:w-full",
        "after:bottom-0"
      )}
    >
      <Image
        src={"/img/home/pink_squiggle.png"}
        alt=""
        width={15896}
        height={1859}
        className="absolute w-full   bottom-[99%]"
      />
      <div className="flex flex-col justify-center items-center my-14 w-full max-w-2xl">
        <div className="flex">
          <h1 className="text-9xl font-garamond text-hot-pink relative top-[-20px]">
            &quot;
          </h1>
          <h1 className="text-almost-black  -sm:text-xl font-mono -lg:text-4xl -md:text-5xl -sm:mb-0 -md:mb-4 -sm:leading-10 -md:leading-10 -lg:leading-10 ">
            The folks at Liminal are highly skilled, productive, and reliable.
            Best of all, they are always up for a challenge!
            <p className="font-roboto -lg:text-2xl -sm:text-xl mt-4">
              <span className="font-extrabold">Jack Herrington</span>, Blue
              Collar Coder
            </p>
          </h1>
        </div>
      </div>
    </ContentSection>
  );
};
