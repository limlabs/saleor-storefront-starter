import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Texture from "../../../../public/texture-logo.jpg";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.jpg";

export default function AboutMain() {
  return (
    <div className="z-10 grid grid-rows-about-grid-mobile justify-center items-center h-main-height">
      <div className="flex w-full h-full justify-center items-center">
        <Image
          src={Texture}
          height={275}
          alt="texture"
          className="rounded-lg shadow-shadow-sm"
        />
      </div>
      <div className="mx-6 flex flex-col h-70 justify-center items-center bg-light-blue-main text-almost-black rounded-lg shadow-shadow-sm p-2 text-center">
        <h3 className="font-press_start_2p">Our Mission</h3>
        <p className="p-2 text-sm">
          Empowering your business with innovative technology, driven by the
          millennial spirit of creativity and collaboration.
        </p>
        <Image src={Slide} height={30} alt="slide" />
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
