"use client";

import clsx from "clsx";
import { useState, useRef, useMemo, useEffect } from "react";

const MAX_SCALE_MOBILE = 1.1;
const MAX_SCALE_DESKTOP = 2.5;

export const IntroLeadIn = () => {
  const [fontScale, setFontScale] = useState(0);
  const [animateResultsText, setAnimateResultsText] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isMobile = useMemo(() => {
    return typeof window === "undefined" ? true : window.innerWidth < 800;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (headingRef.current) {
        let maxScale = MAX_SCALE_DESKTOP;

        if (isMobile) {
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
    <div className="flex flex-col w-full max-w-5xl overflow-hidden uppercase">
      <div className="font-futura font-extrabold -sm:text-xl -md:text-3xl text-white max-w-xl -sm:px-4 mb-2 mt-12">
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
  );
};
