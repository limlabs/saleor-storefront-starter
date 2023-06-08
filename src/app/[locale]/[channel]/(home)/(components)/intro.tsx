"use client";

import clsx from "clsx";
import { useState, useRef, useEffect, useMemo } from "react";
import { ContentSection } from "../../../(components)/contentSection";

const MIN_SCALE_MOBILE = 0.75;
const MAX_SCALE_MOBILE = 1.1;
const MIN_SCALE_DESKTOP = 1.5;
const MAX_SCALE_DESKTOP = 2.5;

export const Intro = () => {
  const [fontScale, setFontScale] = useState(0);
  const [animateResultsText, setAnimateResultsText] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isMobile = useMemo(() => {
    return typeof window === "undefined" ? true : window.innerWidth < 800;
  }, []);

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

        if (offset >= (top + height) * 0.5) {
          setAnimateResultsText(true);
          setTimeout(() => setFontScale(maxScale), 250);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    if (fontScale === 0) {
      onScroll();
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [fontScale, isMobile]);

  return (
    <ContentSection className="pb-0 px-0 items-center ">
      <div className="flex flex-col w-full max-w-5xl overflow-hidden uppercase">
        <div className="font-futura font-extrabold -sm:text-xl -md:text-3xl text-white max-w-xl -sm:px-4">
          A{" "}
          <span
            className={clsx("inline-block transform-gpu transition-transform", {
              "animate-emphasize": animateResultsText,
              "-skew-x-12": animateResultsText,
            })}
          >
            sensible
          </span>{" "}
          choice for
        </div>

        <div
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
          Extraordinary
        </div>
        <div
          className={clsx({
            "font-futura": true,
            "-sm:text-xl": true,
            "-md:text-3xl": true,
            "font-extrabold": true,
            "text-white": true,
            "text-center": true,
            "max-w-xl": true,
            "m-auto": true,
            "animate-bigly": animateResultsText,
          })}
          style={{ animationDelay: "850ms" }}
        >
          results
        </div>
      </div>

      <div className="-sm:text-l -md:text-xl z-10  w-5/6 max-w-3xl font-roboto text-center relative mt-32">
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
          At LIMINAL, we translate the invisible 🤔
          <br /> into the <span className="text-lightest-green">
            tangible
          </span>{" "}
          🎨.
        </p>
        <p className="-lg:leading-10 -sm:leading-8 mt-12">
          We craft experiences that you can
          <br />
          <span className="text-lightest-green">see</span> 👁️ and{" "}
          <span className="text-lightest-green">feel</span> 🥲,
          <br />
          providing an immersive digital journey.
        </p>
        <p className="-lg:leading-10 -sm:leading-8 mt-12">
          Because we believe that your success{" "}
          <span
            className="italic text-light-pink reflected-text"
            data-text="reflects"
          >
            reflects
          </span>{" "}
          on us, we ensure every pixel we touch looks and feels top-notch.
        </p>
        <p className="-lg:leading-10 -sm:leading-8 mt-12">
          Welcome to a world beyond the ordinary: welcome to{" "}
          <span
            className="liminal-text text-3xl leading-10 tracking-widest font-bold font-roboto"
            data-text="LIMINAL"
          >
            LIMINAL.
          </span>
        </p>
      </div>
    </ContentSection>
  );
};
