import Image from "next/image";
import Squig from "../../../../public/pink_squiggle.png";
import { ContentSection } from "./contentSection";

export default function SensibleChoice() {
  return (
    <ContentSection className="pb-0 px-0 ">
      <div className="-sm:w-5/6 flex flex-col -lg:justify-center -lg:items-center">
        <div className="mr-10 ">
          <h3 className="font-futura font-bold -lg:text-2xl -sm:text-lg italic text-white mb-2  -lg:mr-[440px]">
            A SENSIBLE CHOICE FOR
          </h3>
        </div>
        <div>
          <h1 className="font-press_start_2p -lg:text-5xl -sm:text-xl text-light-pink -lg:mb-12 -sm:mb-2 tracking-[.2em]">
            EXTRAORDINARY
          </h1>
        </div>
        <div>
          <h2 className="font-futura -lg:text-4xl -sm:text-xl font-bold italic text-white mb-8">
            RESULTS
          </h2>
        </div>
      </div>

      <div className=" font-roboto text-lightest-green -lg:text-2xl text-center   -lg:w-3/6 -sm:w-5/6 -sm:text-lg mt-32 mb-32 ">
        <p className="-lg:leading-10 -sm:leading-8 ">
          We bring results you can see and feel. Things you can be proud of.
          Because we&apos;re proud of them, too! We know your good look is our
          good look, so we try to maintain appearances -- for both our sakes.
        </p>
      </div>
      <div className="lg:mt-24 -sm:mt-12  relative w-full   bottom-0">
        <Image src={Squig} alt="squiggle w-full" />
      </div>
    </ContentSection>
  );
}
