import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/liminal-vapor.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";

export default function HomeHeroMobile() {
  return (
    <div className="-sm:flex -md:hidden -lg:hidden relative h-screen  flex flex-row justify-center items-center">
      <Image src={Hero} alt="background" fill className="brightness-90 " />
      <div className="z-10 flex flex-col justify-center items-center text-almost-black  ">
        <div className="m-4">
          <Image src={LogoBlack} height={75} alt="logo"></Image>
        </div>

        <Button variant="primary">Explore the Liminal Frontier</Button>
      </div>
    </div>
  );
}
