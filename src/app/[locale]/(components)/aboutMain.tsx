import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Texture from "../../../../public/texture-logo.jpg";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.jpg";

export default function AboutMain() {
  return (
    <div className="  -sm:grid -sm:grid-rows-about-grid-mobile -lg:grid-cols-2 justify-center justify-items-center items-center h-screen  ">
      <div className="flex w-full  justify-center items-center mt-2 -sm:mt-8">
        <Image
          src={Texture}
          height={275}
          alt="liminal cafeteria"
          className="rounded-lg shadow-shadow-sm -lg:h-96 -lg:w-96"
        />
      </div>
      <div className=" flex flex-col -sm:h-6/7 -lg:h-96 w-11/12 -lg:12/13 -lg:mr-16 justify-center items-center bg-transparent shadow-shadow-sm rounded-lg text-almost-black p-2 text-center -sm:mt-8 border border-x-almost-black border-y-hot-pink">
        <h3 className="font-futura -lg:text-4xl -sm:mb-2 -lg:mb-6 font-semibold italic">
          Our Mission
        </h3>
        <p className="p-2  -lg:text-base -sm:text-sm mb-2 font-roboto_mono">
          Empowering your business with innovative technology, driven by the
          millennial spirit of creativity and collaboration.
        </p>
        <div className="mb-2 ">
          <Image
            src={Slide}
            height={30}
            alt="small slide logo"
            className="-lg:h-10 -lg:w-10"
          />
        </div>
        <p className="p-2  -lg:text-base -sm:text-sm font-roboto_mono">
          Collectively we thrive on exploring the edges of what&apos;s possible.
          Our mission is to create innovative software that exists between what
          is known and what is possible. Join us on this journey of exploration
          and discovery.
        </p>
      </div>
    </div>
  );
}
