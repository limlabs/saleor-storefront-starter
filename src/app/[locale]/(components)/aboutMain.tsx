import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Texture from "../../../../public/texture-logo.jpg";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.jpg";

export default function AboutMain() {
  return (
    <div className="z-10 -sm:grid -sm:grid-rows-about-grid-mobile  justify-center justify-items-center items-center h-main-height ">
      <div className="flex w-full h-full justify-center items-center mt-2">
        <Image
          src={Texture}
          height={275}
          alt="texture"
          className="rounded-lg shadow-shadow-sm -lg:h-96 -lg:w-96"
        />
      </div>
      <div className=" flex flex-col -sm:h-6/7 -lg:h-96 w-11/12 justify-center items-center bg-transparent shadow-shadow-sm rounded-md text-almost-black p-4 text-center">
        <h3 className="font-press_start_2p">Our Mission</h3>
        <p className="p-2 text-sm mb-2">
          Empowering your business with innovative technology, driven by the
          millennial spirit of creativity and collaboration.
        </p>
        <div className="mb-2">
          <Image src={Slide} height={30} alt="slide" />
        </div>
        <p className="p-2 text-sm">
          Collectively we thrive on exploring the edges of what&apos;s possible.
          Our mission is to create innovative software that exists between what
          is known and what is possible. Join us on this journey of exploration
          and discovery.
        </p>
      </div>
    </div>
  );
}
