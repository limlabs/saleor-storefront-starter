"use client";
import discord from "../../../../public/test-contact/discord.png";
import linkedin from "../../../../public/test-contact/linkedin.png";

import Image from "next/image";
import { FC } from "react";
import useWindowSize from "@/core/client/useWindowSize";

export const ContactIcons: FC = () => {
  const windowSize = useWindowSize();
  let iconHeight;

  if (windowSize.width !== null) {
    if (windowSize.width < 500) {
      iconHeight = 35;
    } else if (windowSize.width < 800) {
      iconHeight = 35;
    } else {
      iconHeight = 50;
    }
  }
  return (
    <div className="flex justify-evenly mt-12">
      <Image
        src={discord}
        alt="discord"
        height={iconHeight}
        className="cursor-pointer"
      />
      <Image
        src={linkedin}
        alt="discord"
        height={iconHeight}
        className="cursor-pointer"
      />
    </div>
  );
};
