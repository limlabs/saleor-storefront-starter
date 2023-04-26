"use client";

import Image from "next/image";
import { FC } from "react";
import hamburger from "../../../../public/hamburger.png";

export const HamburgerIcon: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Image src={hamburger} height={50} alt="hamburger-icon" />
    </div>
  );
};
