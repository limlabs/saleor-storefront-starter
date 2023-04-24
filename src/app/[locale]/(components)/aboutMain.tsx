import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Texture from "../../../../public/texture-logo.jpg";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.jpg";

export default function AboutMain() {
  return (
    <div>
      {/* <div className="absolute inset-0">
        <Image src={Background} alt="background" fill />
      </div> */}
      <div className="z-10 flex flex-col justify-center items-center">
        <div className="mt-4">
          <Image
            src={Texture}
            height={250}
            alt="texture"
            className="rounded-lg shadow-shadow-sm"
          />
        </div>
        <div className="m-4 flex flex-col justify-center items-center bg-light-blue-main text-almost-black rounded-lg shadow-shadow-sm p-2">
          <p className="p-2">
            Empowering your business with innovative technology, driven by the
            millennial spirit of creativity and collaboration.
          </p>
          <Image src={Slide} height={30} alt="slide" />
          <p className="p-2">
            Collectively we thrive on exploring the edges of what&apos;s
            possible. Our mission is to create innovative software that exists
            between what is known and what is possible. Join us on this journey
            of exploration and discovery.
          </p>
        </div>
      </div>
    </div>
  );
}
