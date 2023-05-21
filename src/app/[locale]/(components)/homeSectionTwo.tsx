import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Synth from "../../../../public/synth.png";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.jpg";

export default function HomeSectionTwo() {
  return (
    <div className=" -sm:grid -sm:grid-rows-about-grid-mobile -lg:flex justify-center flex-col  justify-items-center items-center h-full -sm:pr-2 -sm:pl-2 -sm:h-full">
      <div>
        <h3 className="font-futura text-4xl text-white mb-8 text">
          A SENSIBLE CHOICE FOR
        </h3>
      </div>
      <div>
        <h1 className="font-press_start_2p text-6xl text-light-pink mb-8">
          EXTRAORDINARY
        </h1>
      </div>
      <div>
        <h2 className="font-futura text-4xl text-white">RESULTS</h2>
      </div>
    </div>
  );
}
