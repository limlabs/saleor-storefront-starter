import { useRef, useCallback, useEffect } from "react";

/**
 * `useSmoothScrollHandler` is a custom hook that provides smooth scrolling capabilities.
 * This hook tracks the scroll position of the page and calculates a smoothed (averaged) scroll position,
 * then calls a provided function (`onFrame`) with the smoothed scroll position on each frame.
 *
 * @param ref - A ref to the HTML element that you want to apply the smooth scrolling effect to.
 * @param onFrame - A callback function that will be invoked on each animation frame.
 *                  This function receives two arguments: the HTML element from `ref`, and the current smoothed scroll position.
 */
export const useSmoothScrollHandler = (
  ref: React.RefObject<HTMLElement>,
  onFrame: (element: HTMLElement, scrollPosition: number) => void
) => {
  const currentPositionRef = useRef(0); // Holds the current smoothed scroll position
  const lastPositionRef = useRef(0); // Holds the last smoothed scroll position
  const requestRef = useRef<number | null>(null); // Holds the requestAnimationFrame ID

  // This factor determines the "smoothness" of the scroll
  // Smaller values make the scrolling slower and smoother
  const weightedAverageFactor = 0.05;

  // Animation function to be run on every frame
  const animate = useCallback(() => {
    const scrollPosition = window.pageYOffset; // Current actual scroll position
    // Calculate the smoothed scroll position
    currentPositionRef.current =
      (1 - weightedAverageFactor) * currentPositionRef.current +
      weightedAverageFactor * scrollPosition;

    // If there's a significant difference from the last position, update the last position
    if (Math.abs(lastPositionRef.current - currentPositionRef.current) > 0.5) {
      lastPositionRef.current = currentPositionRef.current;
    }

    // If the element is present, call the onFrame callback
    if (ref.current) {
      onFrame(ref.current, currentPositionRef.current);
    }

    // Schedule the next frame
    requestRef.current = requestAnimationFrame(animate);
  }, [onFrame, ref]);

  // Start the animation when the component is mounted, and cancel it when it's unmounted
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      requestRef.current && cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);
};
