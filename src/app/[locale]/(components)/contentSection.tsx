import { FC } from "react";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentSection: FC<ContentSectionProps> = ({
  children,
  className = "",
}) => {
  const fullClassName = `shadow-shadow-white -sm:shadow-none flex flex-col items-center justify-center bg-almost-black relative  ${className}`;
  return (
    <div className="relative z-100 text-almost-black">
      <section className={fullClassName}>{children}</section>
    </div>
  );
};
