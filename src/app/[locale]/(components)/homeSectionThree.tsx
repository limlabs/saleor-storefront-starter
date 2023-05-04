import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Team from "../../../../public/Austin.png";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.png";
import AI from "../../../../public/gangsters.png";

export default function HomeSectionThree() {
  return (
    <div className=" -sm:grid -sm:grid-rows-about-grid-mobile -lg:grid-cols-2 justify-center justify-items-center items-center h-full  p-8">
      <div className=" flex flex-col -sm:h-6/7 -lg:h-94 w-11/12 -lg:12/13 -lg:mr-16 justify-center items-center bg-transparent rounded-lg text-almost-black p-2 text-center -sm:mt-8   ">
        <h3 className=" font-goldman -lg:text-4xl -sm:mb-2 -lg:mb-6 font-semibold text-light-green [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)]">
          Liminal Media
        </h3>
        <p className="p-2 text-m mb-2 font-prompt">
          We utilize the latest advancements in machine learning and artificial
          intelligence. From art and music to video games and film, Liminal
          Labs&apos; experimental media challenges conventional creative
          processes and opens up new realms of artistic expression.
        </p>
        <div className="mb-2">
          <Image
            src={Slide}
            height={30}
            alt="slide"
            className="-lg:h-10 -lg:w-10"
          />
        </div>
        <p className="p-2 text-m font-prompt">
          Our team of talented artists and engineers work collaboratively to
          create immersive, interactive experiences that blur the line between
          human and machine creativity. By leveraging the power of AI, Liminal
          Labs is exploring new frontiers of media.
        </p>
        <div className="mt-4 ">
          <Button variant="primary">View Our Media</Button>
        </div>
      </div>
      <div className="flex w-full h-full justify-center items-center mt-2 -sm:mt-8">
        <Image
          src={AI}
          height={370}
          alt="streets"
          className="rounded-lg shadow-shadow-sm "
        />
      </div>
    </div>
  );
}
