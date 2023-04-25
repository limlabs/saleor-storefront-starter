import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Team from "../../../../public/Austin.png";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.jpg";

export default function AboutTeam() {
  return (
    <div className="z-10 flex flex-col justify-center items-center h-main-height">
      <div className="flex w-full h-full justify-center items-center">
        <Image
          src={Team}
          height={275}
          width={275}
          alt="texture"
          className="rounded-lg shadow-shadow-sm"
        />
      </div>
      <div className="mx-6 mb-6 flex flex-col h-75 justify-center items-center bg-tansparent text-almost-black rounded-lg shadow-shadow-sm p-2 text-center">
        <h3 className="font-press_start_2p">Our Team</h3>
        <Image src={Slide} height={30} alt="slide" />
        <p className="p-2 text-sm">
          Our diverse group spans various backgrounds, including audio, software
          development, filmmaking, and generative AI. We believe that this
          unique combination of skills and perspectives allows us to achieve
          groundbreaking innovations that blend art and technology in exciting
          ways.
        </p>
      </div>
    </div>
  );
}
