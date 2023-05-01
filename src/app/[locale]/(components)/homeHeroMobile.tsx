import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/breakroom_no_logo.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";

export default function HomeHeroMobile() {
  return (
    <div className=" -sm:flex -md:flex -lg:hidden relative h-full  flex flex-row justify-center items-center">
      <Image src={Hero} alt="background" fill className="brightness-90 " />
      <div className="z-10 flex flex-col justify-center items-center text-almost-black  ">
        <h3 className="text-xl font-mono mb-4 p-4 text-center text-white">
          Blurring the line between what is known and what is possible.
        </h3>
        {/* <Button variant="primary">Learn More</Button> */}
      </div>
    </div>
  );
}
