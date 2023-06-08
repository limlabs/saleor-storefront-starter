import clsx from "clsx";
import Image from "next/image";

const sizes = {
  sm: "-sm:w-[40px] -sm:h-[40px] -md:w-[50px] -md:h-[50px]",
  md: "-sm:w-[50px] -sm:h-[50px] -md:w-[60px] -md:h-[60px]",
  lg: "-sm:w-[60px] -sm:h-[60px] -md:w-[70px] -md:h-[70px]",
};

export const LinkedinIcon = ({
  size = "sm",
}: {
  size?: keyof typeof sizes;
}) => {
  const className = clsx("cursor-pointer", sizes[size]);
  return (
    <div>
      <a href="https://www.linkedin.com/company/limlabs/" target="_blank">
        <Image
          src={"/img/icons/linkedin.png"}
          alt="LinkedIn Icon"
          width={70}
          height={70}
          className={className}
        />
      </a>
    </div>
  );
};
