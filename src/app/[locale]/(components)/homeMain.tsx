import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Hero from "../../../../public/texture-logo.jpg";
import Background from "../../../../public/dirt.svg";

export default function HomeMain() {
  return (
    <section className="-sm:hidden -lg:w-full   -md:h-1/3 -sm:shadow-none  -lg:h-full  -md:flex -lg:flex flex-col items-center justify-center  mt-0 bg-gradient-to-b    relative">
      <Image
        src={Background}
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute z-10"
      />
      <div className="w-5/6 z-20">
        <h1 className="text-white  text-xl text-center [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)] font-futura -lg:text-4xl -md:text-5xl -sm:mb-2 -lg:mb-4 -md:mb-4 font-semibold ">
          Explore the Liminal Frontier
        </h1>
        <p className="text-white font-roboto text-lg text-center mb-4">--</p>
        <h3 className="text-light-pink font-prompt -lg:text-lg -md:text-3xl text-center font-extralight">
          A sensible choice for extraordinary results.
        </h3>
      </div>
    </section>
  );
}
