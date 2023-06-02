import { useCallback, useEffect, useRef } from "react";

const useSmoothScrollPosition = (
  ref: React.RefObject<HTMLElement>,
  heightRatio: number,
  direction: "up" | "down" = "up"
) => {
  const currentPositionRef = useRef(0);
  const lastPositionRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  const weightedAverageFactor = 0.05; // Controls the smoothness, adjust to your liking
  const animate = useCallback(() => {
    const scrollPosition = window.pageYOffset;
    currentPositionRef.current =
      (1 - weightedAverageFactor) * currentPositionRef.current +
      weightedAverageFactor * scrollPosition;

    if (Math.abs(lastPositionRef.current - currentPositionRef.current) > 0.5) {
      lastPositionRef.current = currentPositionRef.current;
    }

    let sign = direction === "up" ? 1 : -1;

    if (ref.current) {
      const shrinkValue = Math.round(currentPositionRef.current * heightRatio);

      ref.current.style.transform = `translateY(${shrinkValue * sign}px)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [direction, heightRatio, ref]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      requestRef.current && cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);
};

export default useSmoothScrollPosition;
