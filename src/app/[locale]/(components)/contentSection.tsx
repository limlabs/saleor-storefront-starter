import clsx from "clsx";
import { FC, forwardRef, ForwardRefExoticComponent } from "react";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentSection = forwardRef(function ContentSection(
  { children, className = "" }: ContentSectionProps,
  ref
) {
  const fullClassName = clsx(
    `flex flex-col  bg-almost-black relative z-100 text-almost-black`,
    className
  );

  return (
    <section ref={ref as any} className={fullClassName}>
      {children}
    </section>
  );
});
