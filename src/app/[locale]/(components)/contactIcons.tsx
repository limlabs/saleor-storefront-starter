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
      iconHeight = 40;
    } else if (windowSize.width < 800) {
      iconHeight = 40;
    } else {
      iconHeight = 50;
    }
  }
  return (
    <div className="flex justify-evenly mt-12">
      <a href="https://discord.gg/limlabs" target="_blank">
        <Image
          src={discord}
          alt="discord"
          height={iconHeight}
          className="cursor-pointer"
        />
      </a>
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
