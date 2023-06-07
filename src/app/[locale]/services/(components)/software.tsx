import { ContentSection } from "@/app/[locale]/(components)/contentSection";

import Image from "next/image";
import { FC } from "react";

export const Software: FC = () => {
  return (
    <ContentSection className="pb-0 px-0 relative z-0 min-h-[80vh] grid grid-cols-[3fr 2fr]">
      <div>
        <Image
          src="/Statue_1.webp"
          alt="statue"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="font-press_start_2p text-6xl text-white">Software</h1>
      </div>
    </ContentSection>
  );
};
