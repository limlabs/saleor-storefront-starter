import Image from "next/image";
import Hero from "../../../../public/360_liminal_orange.png";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";

export default function AboutHero() {
  return (
    <div className=" relative h-full  flex flex-row justify-center items-center">
      <Image src={Hero} alt="background" fill />
      <div className="z-10 flex flex-col justify-center items-center text-almost-black  ">
        <div className="m-4">
          <Image src={LogoBlack} height={75} alt="logo"></Image>
        </div>
        <h3 className="-lg:text-4xl font-futura mb-4 p-4 text-center italic text-light-blue-main font-semibold">
          BLURRING THE LINE BETWEEN WHAT IS POSSIBLE AND WHAT IS KNOWN.
        </h3>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  );
}
