import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/texture-logo.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";

export default function HomeMain() {
  return (
    <section className="z-10 w-screen  -sm:h-screen -md:h-screen -sm:shadow-none -lg:h-1/3 -lg:bg-transparent flex flex-col items-center justify-center  mt-0 bg-gradient-to-b  from-light-pink to-light-blue-main max-w-full ">
      <div className="w-5/6">
        <h1 className="text-almost-black font-press_start_2p -text-m text-center [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)]">
          Explore the Liminal Frontier
        </h1>
        <p className="text-almost-black font-roboto text-lg text-center">--</p>
        <h3 className="text-almost-black font-roboto text-lg text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p className="text-almost-black font-roboto text-lg text-center">-</p>
        <p className="text-almost-black font-roboto text-sm text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
    </section>
  );
}
