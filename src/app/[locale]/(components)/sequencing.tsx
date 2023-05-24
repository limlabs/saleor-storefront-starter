import Button from "@/app/daisyui/button";
import Image from "next/image";
import { ContentSection } from "./contentSection";

export default function Sequencing() {
  return (
    <ContentSection className="-lg:pt-24 -lg:pb-24">
      <Image
        priority
        src="/sequencing_shopping.jpg"
        alt="background"
        height={600}
        width={1000}
        className="z-10 filter blur-2 brightness-75 shadow-shadow-white border border-white"
      />
      <div className="absolute w-5/6 z-20 flex flex-col justify-center items-center">
        <h1 className="text-white  text-xl font-futura -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 mt-6">
          FROM SEQUENCING
        </h1>
        <h1 className="text-white  text-xl font-futura -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 ">
          TO
        </h1>
        <h1 className="text-white  text-xl font-futura -lg:text-4xl -md:text-5xl -sm:mb-2  -md:mb-4 font-semibold mr-4 ">
          SHOPPING CARTS
        </h1>
        <div className="mt-1">
          <Button variant="secondary">Explore Some Use Cases</Button>
        </div>
      </div>
    </ContentSection>
  );
}
