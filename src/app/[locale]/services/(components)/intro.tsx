"use client";

import { ContentSection } from "../../(components)/contentSection";
import Image from "next/image";

export const Intro = () => {
  return (
    <ContentSection className=" px-6 relative z-0 py-12 ">
      <div className=" flex flex-col justify-center items-center">
        <h3 className="font-roboto_mono font-semibold -sm:text-xl -lg:w-1/2 -md:text-3xl -lg:text-6xl leading-loose italic text-white max-w-5/6  -sm:px-4 text-center -sm:leading-[160%] -md:leading-[160%] -lg:leading-[160%]">
          Liminal Labs builds software and media for people who value quality
          and timeliness.
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/cheeseburger.png"
          alt="cheeseburger"
          height={900}
          width={900}
        />
        <div className="z-20 absolute -lg:w-1/3 -sm:w-4/6 text-almost-black italic -lg:text-2xl -sm:text-sm font-roboto_mono font-bold text-[18px] leading-[160%] text-center tracking-widest overflow-visible">
          <p
            className="bg-white -lg:mb-8 -sm:mb-4 inline-block px-2 max-h-[20px]"
            style={{ textShadow: "1px 1px 2px rgba(255, 21, 236, 0.7)" }}
          >
            <span className="inline-block -translate-y-[12px] liminal-text">
              We use software design
            </span>
          </p>
          <br />
          <p
            className="bg-white -lg:mb-8 -sm:mb-4 inline-block px-2 max-h-[20px]"
            style={{ textShadow: "1px 1px 2px rgba(255, 21, 236, 0.7)" }}
          >
            experience, AI-assisted
          </p>
          <br />
          <p
            className="bg-white -lg:mb-8 -sm:mb-4 inline-block px-2 max-h-[20px]"
            style={{ textShadow: "1px 1px 2px rgba(255, 21, 236, 0.7)" }}
          >
            creative workflows, and
          </p>
          <br />
          <p
            className="bg-white -lg:mb-8 -sm:mb-4 inline-block px-2 max-h-[20px]"
            style={{ textShadow: "2px 2px 4px rgba(255, 21, 236, 0.5)" }}
          >
            cross-functional
          </p>
          <br />
          <p
            className="bg-white  font-semibold -sm:mb-2 inline-block px-2 max-h-[20px]"
            style={{ textShadow: "2px 2px 4px rgba(255, 21, 236, 0.5)" }}
          >
            collaboration to quickly
          </p>
          <br />
          <p
            className="bg-white  font-semibold -sm:mb-2 inline-block px-2 max-h-[20px]"
            style={{ textShadow: "2px 2px 4px rgba(255, 21, 236, 0.5)" }}
          >
            produce polished solutions
          </p>
          <br />
          <p
            className="bg-white  font-semibold -sm:mb-2 inline-block px-2 max-h-[20px]"
            style={{ textShadow: "2px 2px 4px rgba(255, 21, 236, 0.5)" }}
          >
            for a variety of scenarios.
          </p>
        </div>
      </div>
    </ContentSection>
  );
};
