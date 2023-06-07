"use client";
import discord from "../../../../public/test-contact/discord.png";
import linkedin from "../../../../public/test-contact/linkedin.png";

import Image from "next/image";
import { FC } from "react";
import useWindowSize from "@/core/client/useWindowSize";

export const LinkedinIcon: FC = () => {
  const windowSize = useWindowSize();
  let iconHeight;

  if (windowSize.width !== null) {
    if (windowSize.width < 500) {
      iconHeight = 40;
    } else if (windowSize.width < 800) {
      iconHeight = 40;
    } else {
      iconHeight = 50;
    }
  }
  return (
    <div>
      <a href="https://www.linkedin.com/company/limlabs/" target="_blank">
        <Image
          src={linkedin}
          alt="discord"
          height={iconHeight}
          className="cursor-pointer"
        />
      </a>
    </div>
  );
};
