import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Hero from "../../../../public/texture-logo.jpg";
import Background from "../../../../public/dirt.svg";

export default function HomeMain() {
  return (
    <section className="-sm:hidden -lg:w-full   -md:h-1/3 -sm:shadow-none  -lg:h-full  -md:flex -lg:flex flex-col items-center justify-center  mt-0   relative">
      <div className="w-5/6 z-20 flex justify-center items-start ">
        <h1 className="text-white  text-xl font-futura -lg:text-2xl -md:text-5xl -sm:mb-2 italic -md:mb-4 font-semibold mr-4 mt-6">
          EXPLORE THE
        </h1>
        <Image src={Logo} alt="logo" height={50} />
        <h1 className="text-white  text-xl font-futura -lg:text-2xl -md:text-5xl -sm:mb-2 italic -md:mb-4 font-semibold ml-4 mt-6">
          FRONTIER
        </h1>
      </div>
    </section>
  );
}
