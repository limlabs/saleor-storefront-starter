"use client";

import clsx from "clsx";
import { useState, useRef, useEffect, useMemo } from "react";
import { ContentSection } from "../../../(components)/contentSection";

const MIN_SCALE_MOBILE = 0.75;
const MAX_SCALE_MOBILE = 1.1;
const MIN_SCALE_DESKTOP = 1.5;
const MAX_SCALE_DESKTOP = 2.5;

export const Intro = () => {
  const [fontScale, setFontScale] = useState(1);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isMobile = useMemo(() => {
    return typeof window === "undefined" ? true : window.innerWidth < 800;
  }, []);

  const animateResultsText = useMemo(() => {
    return fontScale === (isMobile ? MAX_SCALE_MOBILE : MAX_SCALE_DESKTOP);
  }, [fontScale, isMobile]);

  useEffect(() => {
    const onScroll = () => {
      if (headingRef.current) {
        let minScale = MIN_SCALE_DESKTOP;
        let maxScale = MAX_SCALE_DESKTOP;

        if (isMobile) {
          minScale = MIN_SCALE_MOBILE;
          maxScale = MAX_SCALE_MOBILE;
        }

        const { top, height } = headingRef.current.getBoundingClientRect();
        const offset = Math.max(window.innerHeight - top, 0);
        let newScale = minScale;
        if (offset >= top + height * 0.5) {
          newScale = maxScale;
        }

        setFontScale(newScale);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  return (
    <ContentSection className="pb-0 px-0 relative z-0">
      <div className=" flex flex-col w-full max-w-3xl overflow-hidden">
        <h3 className="font-futura font-extrabold -sm:text-xl -md:text-3xl italic text-white max-w-xl -sm:px-4 ">
          A SENSIBLE CHOICE FOR
        </h3>

        <h1
          ref={headingRef}
          className={clsx(
            "font-press_start_2p text-light-pink font-thin -sm:text-2xl -lg:text-3xl my-12 text-center transition-all duration-700",
            {
              "bg-gradient-to-r": true,
              "bg-clip-text": true,
              "text-white": !animateResultsText,
              "from-light-pink to-lightest-green animate-hue-rotate":
                animateResultsText,
            }
          )}
          style={{
            transform: `scale(${fontScale})`,

            WebkitTextFillColor: animateResultsText ? "transparent" : "none",
          }}
        >
          EXTRAORDINARY
        </h1>

        <h2
          className={clsx({
            "font-futura": true,
            "-sm:text-xl": true,
            "-md:text-3xl": true,
            "font-extrabold": true,
            "text-white": true,
            italic: true,
            "text-center": true,
            "max-w-xl": true,
            "m-auto": true,
          })}
        >
          RESULTS
        </h2>
      </div>

      <div className="-sm:text-l -md:text-xl z-10  w-5/6 max-w-3xl font-roboto text-center relative mt-32 p-8">
        <p className="font-mono font-bold italic -sm:text-l -md:text-3xl relative z-10 -sm:px-8 -md:px-20 pt-16 pb-14 rounded-t-[150px] block bg-light-pink -sm:leading-10 -md:leading-10">
          Liminal Labs builds software and media for people who value quality
          and timeliness.
        </p>
        <p className="-sm:px-4 -md:px-8 w-full relative -top-10 pt-10 z-10 after:content-drip after:block after:w-full after:absolute after:top-[100%] after:left-0 after:z-0 bg-light-pink leading-8">
          We use decades of technical design experience, innovative AI-assisted
          workflows, and broad cross-functional collaboration to quickly produce
          polished solutions for a variety of digital media scenarios.
        </p>
      </div>

      <div className=" font-mono text-white -lg:text-2xl text-center -lg:w-3/6 -sm:w-5/6 -sm:text-lg -sm:pt-40 -md:pt-96 -sm:pb-40 -md:pb-80 ">
        <p className="-lg:leading-10 -sm:leading-8 ">
          LIMINAL brings results you can{" "}
          <span className="text-lightest-green">see</span> 👁️ and{" "}
          <span className="text-lightest-green">feel</span> 🥲.
          <br /> We know your good look{" "}
          <span className="italic text-light-pink">is</span> our good look, so
          we try to maintain appearances — for both our sakes!
        </p>
      </div>
    </ContentSection>
  );
};
