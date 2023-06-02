import clsx from "clsx";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const DeferredContents = dynamic(() => import("./heroContent"), {
  ssr: false,
});

export const HomeHero = () => {
  return (
    <div className={clsx("z-10 relative h-screen")}>
      <Suspense>
        <DeferredContents />
      </Suspense>
    </div>
  );
};

export default HomeHero;
