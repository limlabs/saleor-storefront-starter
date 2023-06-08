import clsx from "clsx";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import { BlurScrim } from "./blurScrim";

export const DeferredContents = dynamic(() => import("./heroContent"), {
  ssr: false,
});

export const HomeHero = () => {
  return (
    <div className={clsx("z-10 relative h-screen")}>
      <div className="h-5/6 overflow-hidden relative">
        <Suspense>
          <DeferredContents />
          <BlurScrim />
        </Suspense>
      </div>
      <Image
        src="/textures/glitch-transition.svg"
        alt="glitch texture"
        priority
        width={3819}
        height={251}
        className="absolute top-[80%] z-30"
      />
    </div>
  );
};

export default HomeHero;
