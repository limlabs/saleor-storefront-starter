import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Team from "../../../../public/Austin.png";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.png";

export default function AboutTeam() {
  return (
    <div className="z-10 -sm:grid -sm:grid-rows-about-grid-mobile -lg:grid-cols-2 justify-center justify-items-center items-center h-main-height ">
      <div className="flex flex-col -sm:h-6/7 -lg:h-96 w-11/12 -lg:w-12/13 -lg:ml-6 justify-center items-center bg-gradient-to-b  from-light-pink to-light-blue-main shadow-shadow-sm rounded-md text-almost-black p-4 text-center">
        <h3 className="font-press_start_2p -sm:mb-2 -lg:mb-4 -lg:text-xl">
          Our Team
        </h3>
        <div className="-sm:mb-2 -lg:mb-4">
          <Image
            src={Slide}
            height={30}
            alt="slide"
            className="-lg:h-10 -lg:w-10"
          />
        </div>
        <p className="p-2 text-sm">
          Our diverse group spans various backgrounds, including audio, software
          development, filmmaking, and generative AI. We believe that this
          unique combination of skills and perspectives allows us to achieve
          groundbreaking innovations that blend art and technology in exciting
          ways. With our collective expertise, we are dedicated to pushing the
          boundaries of creativity and engineering to create immersive and
          unforgettable experiences for our audience.
        </p>
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <Image
          src={Background}
          height={275}
          width={275}
          alt="texture"
          className="rounded-lg shadow-shadow-sm -lg:h-96 -lg:w-96"
        />
      </div>
    </div>
  );
}
