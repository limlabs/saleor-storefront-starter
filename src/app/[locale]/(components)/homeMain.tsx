import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/texture-logo.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";

export default function HomeMain() {
  return (
    <section className="-sm:hidden w-full   -md:h-1/3 -sm:shadow-none  -lg:h-1/3 -lg:bg-transparent -md:flex -lg:flex flex-col items-center justify-center  mt-0 bg-gradient-to-b  from-light-gray to-light-blue-main max-w-full border border-almost-black">
      <div className="w-5/6">
        <h1 className="text-almost-black  text-xl text-center [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)] font-goldman -lg:text-4xl -md:text-5xl -sm:mb-2 -lg:mb-4 -md:mb-4 font-semibold">
          Explore the Liminal Frontier
        </h1>
        <p className="text-almost-black font-roboto text-lg text-center mb-4">
          --
        </p>
        <h3 className="text-almost-black font-prompt -lg:text-lg -md:text-3xl text-center font-extralight">
          The future of creativity starts here.
        </h3>
      </div>
    </section>
  );
}
