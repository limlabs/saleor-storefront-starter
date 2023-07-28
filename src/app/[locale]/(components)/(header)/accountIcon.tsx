"use client";

import { FC } from "react";
import PersonIcon from "./person.png";
import Image from "next/image";

export const AccountIcon: FC = () => {
  return (
    <div className="cursor-pointer">
      <Image
        src={PersonIcon}
        priority
        alt="account icon"
        width={40}
        height={40}
      />
    </div>
  );
};
