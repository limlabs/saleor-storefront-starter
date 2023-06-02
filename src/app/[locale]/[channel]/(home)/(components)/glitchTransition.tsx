"use client";
import { ContentSection } from "@/app/[locale]/(components)/contentSection";
import useSmoothScrollPosition from "@/core/client/useScrollPosition";
import clsx from "clsx";
import { FC, useRef } from "react";

export const GlitchTransition: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  useSmoothScrollPosition(ref, 6);
  return (
    <ContentSection
      ref={ref}
      className={clsx(
        "bg-gray-500",
        "bg-opacity-10",
        "backdrop-blur-xsmall",
        "absolute",
        "top-[-600vh]"
      )}
    >
      <div className="bg-checkerboard bg-checker-small w-full h-[500vh] bg-repeat opacity-5"></div>
    </ContentSection>
  );
};
