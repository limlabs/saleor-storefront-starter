import Background from "../../../../../public/irridescent.jpg";
import Breakroom from "../../../../../public/breakroom_no_logo.jpg";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import { Canvas } from "@react-three/fiber";
import ThreeScene from "../../(components)/threeScene";

export default function HomePage() {
  return (
    <div className="relative flex  flex-col justify-start items-center h-main-height mt-header-margin w-full  ">
      <Image
        src={Background}
        alt="background"
        fill
        className="brightness-90 filter blur-xsmall"
      />

      <ThreeScene />
      <section className="z-10 w-4/5 h-2/5 shadow-shadow-hero bg-light-pink flex flex-col items-center justify-center p-6">
        <div className="w-3/5">
          <h1 className="text-almost-black font-press_start_2p text-m text-center [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)]">
            Explore the Liminal Frontier
          </h1>
          <p className="text-almost-black font-roboto text-lg text-center">
            --
          </p>
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
    </div>
  );
}
