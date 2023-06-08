"use client";
import { useSmoothScrollHandler } from "@/core/client/useSmoothScrollHandler";
import { FC, useRef } from "react";

export const BlurScrim: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useSmoothScrollHandler(ref, (div, position) => {
    const pct = position / window.outerHeight;
    div.style.backdropFilter = `blur(${Math.round(pct * 10)}px)`;
  });

  return (
    <div
      ref={ref}
      className="w-full h-full absolute top-0 z-20 transition-opacity bg-gray-500 bg-opacity-10"
    ></div>
  );
};
