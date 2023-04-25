import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/liminal-vapor.jpg";
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
        <h3 className="text-l font-roboto mb-4 p-4 text-center">
          Blurring the line between what is known and what is possible.
        </h3>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  );
}
