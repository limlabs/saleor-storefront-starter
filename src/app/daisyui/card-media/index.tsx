import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface CardMediaProps {
  src: string;
  loader?: <T extends { src: string }>(args: T) => string;
  alt: string;
  accentBg?: true;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority: boolean;
}

const CardMedia = React.forwardRef<HTMLElement, CardMediaProps>(
  function CardMedia(
    { accentBg, src, loader, alt = "", className, ...imgArgs },
    ref
  ) {
    const classNames = clsx(
      "rounded-t-md",
      {
        "bg-neutral": accentBg,
      },
      className
    );

    return (
      <figure ref={ref} className={classNames}>
        <Image src={src} loader={loader} alt={alt} {...imgArgs} />
      </figure>
    );
  }
);

export default CardMedia;
