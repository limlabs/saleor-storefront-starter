import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Team from "../../../../public/Austin.png";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.png";

export default function AboutTeam() {
  return (
    <div className=" -sm:grid -sm:grid-rows-about-grid-mobile -lg:grid-rows-2 justify-center justify-items-center items-center h-screen ">
      <div className=" -lg:grid -lg:grid-cols-2 justify-center items-center w-screen">
        <div className="-sm:hidden -lg:flex flex justify-center  items-center h-20 w-full bg-almost-black left-0 rounded-r-lg shadow-shadow-sm">
          <Image src={Logo} alt="logo" height={30} />
        </div>
        <div className="flex w-full h-full justify-center items-center">
          <Image
            src={Background}
            height={270}
            width={270}
            alt="texture"
            className="rounded-lg shadow-shadow-sm -lg:h-95 -lg:w-95"
          />
        </div>
      </div>

      <section className="flex flex-col -sm:h-7/8  -lg:h-92 w-10/12 -lg:12/13 -lg:mr-6 justify-center items-center  shadow-shadow-sm rounded-lg text-almost-black p-4 text-center bg-gradient-to-b  from-light-pink to-light-blue-main ">
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
        <p className="-lg:p-2 text-sm ">
          Our diverse group spans various backgrounds, including audio, software
          development, filmmaking, and generative AI. We believe that this
          unique combination of skills and perspectives allows us to achieve
          groundbreaking innovations that blend art and technology in exciting
          ways. With our collective expertise, we are dedicated to pushing the
          boundaries of creativity and engineering to create immersive and
          unforgettable experiences for our audience.
        </p>
      </section>
    </div>
  );
}
