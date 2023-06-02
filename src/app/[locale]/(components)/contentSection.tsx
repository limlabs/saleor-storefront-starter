import { FC, forwardRef, ForwardRefExoticComponent } from "react";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentSection = forwardRef(function ContentSection(
  { children, className = "" }: ContentSectionProps,
  ref
) {
  const fullClassName = `flex flex-col items-center justify-center bg-almost-black relative  ${className}`;
  return (
    <div ref={ref as any} className="relative z-100 text-almost-black">
      <section className={fullClassName}>{children}</section>
    </div>
  );
});
