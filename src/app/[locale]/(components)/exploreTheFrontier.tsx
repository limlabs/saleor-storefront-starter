import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import { ContentSection } from "./contentSection";

export default function ExploreTheFrontier() {
  return (
    <ContentSection>
      <div className=" bg-dirt  mt-[-24px] pb-24 bg-repeat-x w-full  flex justify-center items-start pt-36 ">
        <span className="h-48"></span>
        {/* <Image src={Logo} alt="logo" height={75} className="transparent" /> */}
      </div>
    </ContentSection>
  );
}
