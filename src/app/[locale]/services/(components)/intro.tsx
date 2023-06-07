"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ContentSection } from "../../(components)/contentSection";
import Image from "next/image";

const MIN_SCALE_MOBILE = 0.75;
const MAX_SCALE_MOBILE = 1.1;
const MIN_SCALE_DESKTOP = 1.5;
const MAX_SCALE_DESKTOP = 2.5;

export const Intro = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <ContentSection className=" px-6 relative z-0 py-12 ">
      <div className=" flex flex-col justify-center items-center">
        <h3 className="font-roboto_mono font-semibold -sm:text-xl -lg:w-1/2 -md:text-3xl -lg:text-6xl leading-loose italic text-white max-w-5/6  -sm:px-4 text-center">
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
        <div className="z-20 absolute -lg:w-1/3 -sm:w-4/6 text-almost-black  font-roboto_mono italic -lg:text-2xl -sm:text-sm font-semibold text-center">
          <p
            className="bg-white -lg:mb-8 -sm:mb-4"
            style={{ textShadow: "1px 1px 2px rgba(255, 21, 236, 0.7)" }}
          >
            We use software design experience,
          </p>
          <p
            className="bg-white -lg:mb-8 -sm:mb-4"
            style={{ textShadow: "1px 1px 2px rgba(255, 21, 236, 0.7)" }}
          >
            AI-assisted creative workflows,{" "}
          </p>
          <p
            className="bg-white -lg:mb-8 -sm:mb-4"
            style={{ textShadow: "1px 1px 2px rgba(255, 21, 236, 0.7)" }}
          >
            and cross-functional collaboration
          </p>
          <p
            className="bg-white -lg:mb-8 -sm:mb-4"
            style={{ textShadow: "2px 2px 4px rgba(255, 21, 236, 0.5)" }}
          >
            to produce polished solutions
          </p>
          <p
            className="bg-white  font-semibold -sm:mb-2"
            style={{ textShadow: "2px 2px 4px rgba(255, 21, 236, 0.5)" }}
          >
            for a variety of scenarios
          </p>
        </div>
      </div>
    </ContentSection>
  );
};
