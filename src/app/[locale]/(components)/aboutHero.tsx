import Image from "next/image";
import Hero from "../../../../public/about-stitched.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";
import HeroMobile from "../../../../public/about_mobile.jpg";

export default function AboutHero() {
  return (
    <div className=" relative h-full  flex flex-row justify-center items-center">
      <Image src={Hero} alt="background" fill className="-sm:hidden -lg:flex" />
      <Image
        src={HeroMobile}
        alt="background"
        fill
        className="-lg:hidden -sm:flex"
      />
      <div className="z-10 flex flex-col justify-center items-center text-almost-black  ">
        <div className="m-4">
          <Image src={LogoBlack} height={75} alt="logo"></Image>
        </div>
        <h3 className="-lg:text-4xl font-roboto_mono font-semibold p-4 text-center  text-white ">
          BLURRING THE LINE BETWEEN WHAT IS POSSIBLE
        </h3>
        <h3 className="-lg:text-4xl font-roboto_mono font-semibold mb-4 p-4 text-center  text-white -lg:ml-[60vw]">
          AND WHAT IS KNOWN.
        </h3>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  );
}
