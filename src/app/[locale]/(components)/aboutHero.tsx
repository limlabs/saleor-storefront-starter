import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/liminal-vapor.jpg";
import Button from "@/app/daisyui/button";

export default function AboutHero() {
  return (
    <div className="absolute inset-0 h-main-height mt-header-margin flex flex-row justify-center items-center">
      <Image src={Hero} alt="background" fill />
      <div className="z-10 flex flex-col justify-center items-center text-almost-black">
        <h1 className="text-4xl font-roboto mb-4">We&apos;re Liminal Labs</h1>
        <h3 className="text-l font-roboto mb-4 p-4 text-center">
          Blurring the line between what is known and what is possible.
        </h3>
        <Button variant="secondary">Explore the Liminal Frontier</Button>
      </div>
    </div>
  );
}
