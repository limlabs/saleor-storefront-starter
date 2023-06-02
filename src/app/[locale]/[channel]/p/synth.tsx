import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Synth from "../../../../public/synth.png";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.jpg";

export default function HomeSectionTwo() {
  return (
    <div className=" -sm:grid -sm:grid-rows-about-grid-mobile -lg:grid-cols-2  justify-items-center items-center h-full -sm:pr-2 -sm:pl-2 -sm:h-full">
      <div className="flex w-full h-full justify-center items-center mt-2 -sm:mt-0 -sm:pr-4 -sm:pl-4">
        <Image
          src={Synth}
          height={370}
          alt="texture"
          className="rounded-lg shadow-shadow-sm "
        />
      </div>
      <div className=" flex flex-col -sm:h-6/7 -lg:h-94 -lg:w-11/12 -sm:w-full -lg:mr-16 -lg:justify-center  -sm:justify-start items-center bg-transparent rounded-lg text-almost-black p-2 text-center -sm:mt-0 -sm:mb-10">
        <h3 className="font-goldman -lg:text-4xl -md:text-5xl -sm:text-xl -sm:mb-2 -lg:mb-6 -md:mb-6 font-semibold text-light-pink [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)]">
          Innovative Software
        </h3>
        <p className="p-2 -lg:text-base -md:text-2xl  -sm:text-sm mb-2 font-prompt text-white">
          Liminal Labs is a cutting-edge software company that specializes in
          developing innovative software solutions that push the boundaries of
          what&apos;s possible.
        </p>
        <div className="mb-2">
          <Image
            src={Slide}
            height={30}
            alt="slide"
            className="-lg:h-10 -lg:w-10"
          />
        </div>
        <p className="p-2 -lg:text-base -md:text-2xl  -sm:text-sm mb-2 font-prompt text-white">
          Our team of skilled engineers and designers are dedicated to creating
          software that is not only functional, but also beautiful and intuitive
          to use.
        </p>
        <div className="-lg:mt-4 -md:mt-4 -sm:mt-0">
          <Button variant="secondary">Explore Our Products</Button>
        </div>
      </div>
    </div>
  );
}
