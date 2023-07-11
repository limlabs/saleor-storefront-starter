import { FC } from "react";

/**
 * Considerations
 *
 * - What if less than 4 (or 6) images?
 * - What if no images (less important / likely)?
 */

const SingleImageSkeleton: FC = () => {
  return (
    <div className="flex justify-center items-center lg:pr-8 lg:pt-2 mix-blend-overlay bg-slate-800 glass  h-[840px] w-[840px]">
      <div className=" mix-blend-overlay"></div>
    </div>
  );
};

export const ProductImageGridSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <SingleImageSkeleton />
    </div>
  );
};
