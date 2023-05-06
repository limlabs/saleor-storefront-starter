import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";
import Team from "../../../../public/Austin.png";
import Slide from "../../../../public/slide-logo.png";
import Background from "../../../../public/window.png";
import AI from "../../../../public/gangsters.png";

export default function HomeSectionThree() {
  return (
    <>
      <div className=" -sm:hidden -lg:grid grid-cols-2  justify-center justify-items-center items-center h-screen  p-8">
        <div className=" flex flex-col -sm:h-6/7 -lg:h-94 -lg:w-11/12 -sm:w-full -lg:12/13 -lg:mr-16 -lg:justify-center -md-justify-center -sm:justify-start items-center bg-transparent rounded-lg text-almost-black p-2 text-center -sm:mt-0 -sm:mb-10">
          <h3 className=" font-goldman -lg:text-4xl -sm:mb-2 -lg:mb-6 font-semibold text-light-green [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)]">
            Liminal Media
          </h3>
          <p className="p-2 -lg:text-base -md:text-2xl  -sm:text-sm mb-2 font-prompt">
            We utilize the latest advancements in machine learning and
            artificial intelligence. From art and music to video games and film,
            Liminal Labs&apos; experimental media opens up new realms of
            artistic expression.
          </p>
          <div className="mb-2">
            <Image
              src={Slide}
              height={30}
              alt="slide"
              className="-lg:h-10 -lg:w-10"
            />
          </div>
          <p className="p-2 -lg:text-base -sm:text-sm mb-2 font-prompt">
            Our team of talented artists and engineers work collaboratively to
            create immersive, interactive experiences that blur the line between
            human and machine creativity.
          </p>
          <div className="mt-4 ">
            <Button variant="primary">View Our Media</Button>
          </div>
        </div>
        <div className="flex w-full h-full justify-center items-center mt-2 -sm:mt-8">
          <Image
            src={AI}
            height={370}
            alt="streets"
            className="rounded-lg shadow-shadow-sm "
          />
        </div>
      </div>
      <div className=" -sm:grid -md:grid -sm:grid-rows-about-grid-mobile -md:grid-rows-about-grid-mobile -lg:hidden justify-center justify-items-center items-center h-screen  p-2">
        <div className="flex w-full h-full justify-center items-center mt-2 -sm:mt-0 -sm:pr-4 -sm:pl-4">
          <Image
            src={AI}
            height={370}
            alt="streets"
            className="rounded-lg shadow-shadow-sm "
          />
        </div>
        <div className=" flex flex-col -sm:h-6/7 -lg:h-94 -lg:w-11/12 -sm:w-full -lg:mr-16 -lg:justify-center  -sm:justify-start items-center bg-transparent rounded-lg text-almost-black p-2 text-center -sm:mt-0 -sm:mb-10 -md:mb-20">
          <h3 className=" font-goldman -lg:text-4xl -md:text-5xl -sm:text-xl -sm:mb-2 -lg:mb-6 -md:mb-6 font-semibold  text-light-green [text-shadow:_0_1.2px_0_rgb(0_0_0_/_40%)]">
            Liminal Media
          </h3>
          <p className="p-2  -md:text-2xl  -sm:text-sm mb-2 font-prompt">
            We utilize the latest advancements in machine learning and
            artificial intelligence. From art and music to video games and film,
            Liminal Labs&apos; experimental media opens up new realms of
            artistic expression.
          </p>
          <div className="mb-2">
            <Image
              src={Slide}
              height={30}
              alt="slide"
              className="-lg:h-10 -lg:w-10"
            />
          </div>
          <p className="p-2  -md:text-2xl  -sm:text-sm mb-2 font-prompt">
            Our team of talented artists and engineers work collaboratively to
            create immersive, interactive experiences that blur the line between
            human and machine creativity.
          </p>
          <div className="-lg:mt-4 -md:mt-4 -sm:mt-0">
            <Button variant="primary">View Our Media</Button>
          </div>
        </div>
      </div>
    </>
  );
}
