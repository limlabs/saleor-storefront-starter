import Image from "next/image";
import Squig from "../../../../public/pink_squiggle.png";

export default function HomeSectionTwo() {
  return (
    <div className="flex flex-col justify-center items-center h-auto -sm:pr-2  -sm:h-full -lg:p-0">
      <div className="mr-10">
        <h3 className="font-futura text-2xl text-white mb-8 ">
          A SENSIBLE CHOICE FOR
        </h3>
      </div>
      <div>
        <h1 className="font-press_start_2p text-5xl text-light-pink mb-8">
          EXTRAORDINARY
        </h1>
      </div>
      <div>
        <h2 className="font-futura text-4xl text-white mb-8">RESULTS</h2>
      </div>
      <div className="mt-24  relative w-full  bottom-2 right-50">
        <Image src={Squig} alt="squiggle w-full" />
      </div>
    </div>
  );
}
