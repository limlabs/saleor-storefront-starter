import Image from "next/image";
import Squig from "../../../../public/pink_squiggle.png";
import { ContentSection } from "./contentSection";

export default function SensibleChoice() {
  return (
    <ContentSection className="pb-0 px-0 ">
      <div className="mr-10 ">
        <h3 className="font-futura font-bold text-2xl italic text-white mb-2 mr-[475px]">
          A SENSIBLE CHOICE FOR
        </h3>
      </div>
      <div>
        <h1 className="font-press_start_2p text-5xl text-light-pink mb-12 tracking-[.25em]">
          EXTRAORDINARY
        </h1>
      </div>
      <div>
        <h2 className="font-futura text-4xl font-bold italic text-white mb-8">
          RESULTS
        </h2>
      </div>
      <div className="mt-24  relative w-full   bottom-0">
        <Image src={Squig} alt="squiggle w-full" />
      </div>
    </ContentSection>
  );
}
