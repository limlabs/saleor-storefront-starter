import Image from "next/image";
import Squig from "../../../../public/pink_squiggle.png";
import { ContentSection } from "./contentSection";

export default function SensibleChoice() {
  return (
    <ContentSection className="pb-0 px-0 ">
      <div className="-sm:w-5/6">
        <div className="mr-10 ">
          <h3 className="font-futura font-bold text-2xl -sm:text-lg italic text-white mb-2 mr-[475px]">
            A SENSIBLE CHOICE FOR
          </h3>
        </div>
        <div>
          <h1 className="font-press_start_2p text-5xl -sm:text-xl text-light-pink mb-12 -sm:mb-2 tracking-[.2em]">
            EXTRAORDINARY
          </h1>
        </div>
        <div>
          <h2 className="font-futura text-4xl -sm:text-xl font-bold italic text-white mb-8">
            RESULTS
          </h2>
        </div>
      </div>

      <div className=" font-roboto text-lightest-green text-2xl  w-3/6 -sm:w-5/6 -sm:text-lg mt-32 mb-32 ">
        <p className="leading-10">
          Liminal Labs is an innovative software company bridging the physical
          and digital worlds. They empower businesses with custom software
          solutions, advanced data analytics, and emerging technologies like AI,
          blockchain, and VR. With a user-centric design approach, they reshape
          industries and drive sustainable growth through transformative
          software applications.
        </p>
      </div>
      <div className="mt-24  relative w-full   bottom-0">
        <Image src={Squig} alt="squiggle w-full" />
      </div>
    </ContentSection>
  );
}
