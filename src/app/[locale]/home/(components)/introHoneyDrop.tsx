"use client";

import { useEffect, useRef, useState } from "react";

export const HoneyDrop = () => {
  const [dripOffset, setDripOffset] = useState(0.3);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const setRandomDripOffset = () => {
      setDripOffset(Math.min(0.8, Math.max(0.2, Math.random())));
    };

    const currentDrop = ref.current;
    if (!currentDrop) {
      return;
    }

    currentDrop.addEventListener("animationiteration", setRandomDripOffset);
    return () => {
      currentDrop.removeEventListener(
        "animationiteration",
        setRandomDripOffset
      );
    };
  }, []);

  return (
    <div
      className="absolute bottom-4"
      style={{ left: `${dripOffset * 100}%` }}
      ref={ref}
    >
      <div className="absolute top-0 w-[10px] h-[30px] bg-light-pink rounded-full animate-honeydrop-stretch scale-x-75"></div>
      <div className="absolute top-[-10px] left-[1px] bg-light-pink rounded-honeydrop-tear w-[20px] h-[20px] z-0 rotate-180 animate-honeydrop-fall"></div>
    </div>
  );
};
