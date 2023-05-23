import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import { ContentSection } from "./contentSection";

export default function ExploreTheFrontier() {
  return (
    <ContentSection>
      <div className=" bg-dirt  mt-[-24px] pb-24 bg-repeat-x w-full  flex justify-center items-start pt-36">
        <h1 className="text-white  text-xl font-futura -lg:text-2xl -md:text-5xl -sm:mb-2 italic -md:mb-4 font-semibold mr-4 mt-6">
          EXPLORE THE
        </h1>
        <Image src={Logo} alt="logo" height={50} />
        <h1 className="text-white  text-xl font-futura -lg:text-2xl -md:text-5xl -sm:mb-2 italic -md:mb-4 font-semibold ml-4 mt-6">
          FRONTIER
        </h1>
      </div>
    </ContentSection>
  );
}
