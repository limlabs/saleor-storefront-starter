import { ContentSection } from "@/app/[locale]/(components)/contentSection";

import Image from "next/image";
import { FC } from "react";

export const SeeAndFeel: FC = () => {
  return (
    <ContentSection className="pb-0 px-0 relative z-0 min-h-[80vh] flex justify-center items-center">
      <Image
        src="/vapor_fish.png"
        alt="fishbowl background"
        fill
        className="object-cover"
      />
      <div className="bg-dark-blue text-liminal-teal z-20 drop-shadow-[2px -8px 5px 0px rgba(19,27,108,0.8)] -lg:text-3xl font-roboto_mono font-thin flex justify-center items-center h-12 w-full z-20">
        <p>We bring results you can</p>
      </div>
      <div className="flex relative justify-center items-center h-1/5 w-full z-100">
        <Image
          src="/bowl_2.jpg"
          alt="layer fishbowl background"
          fill
          className="object-cover"
        />
        <div className="font-press_start_2p -lg:text-5xl -sm:text-xl py-12 text-light-blue-main z-20 w-full flex -lg:flex-row -sm:flex-col justify-evenly items-center">
          <Image
            src="/eyeball_HD.png"
            alt="image of eyeball"
            height={150}
            width={150}
            className="overflow-hidden -sm:hidden -lg:flex"
          />
          <h2 className="z-100 -sm:mb-2">SEE AND FEEL</h2>
          <Image
            src="/eyeball_HD.png"
            alt="image of eyeball"
            height={150}
            width={150}
            className="overflow-hidden -sm:mt-4"
          />
        </div>
      </div>
      <div className="bg-dark-blue text-liminal-teal -lg:text-3xl font-roboto_mono font-thin flex justify-center items-center h-12 w-full z-20">
        <p>Things you can be proud of.</p>
      </div>
      <div className="bg-dark-blue text-liminal-teal drop-shadow-[ 0px 8px 2px 0px rgba(19,27,108,0.59)] -lg:text-3xl font-roboto_mono font-thin flex justify-center items-center mt-10 h-12 w-full z-20">
        <p>Because we&apos;re proud of them too!</p>
      </div>
    </ContentSection>
  );
};
