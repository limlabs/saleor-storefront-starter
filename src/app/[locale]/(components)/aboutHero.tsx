import Image from "next/image";
import Hero from "../../../../public/about-stitched.jpg";
import HeroMobile from "../../../../public/about_mobile.jpg";
import Button from "@/app/daisyui/button";

export default function AboutHero() {
  return (
    <div className=" relative h-full  flex flex-row justify-center items-center">
      <Image
        src="/about-stitched.jpg"
        alt="liminal hallway background"
        fill
        className="-sm:hidden -lg:flex"
      />
      <Image
        src="/about_mobile.jpg"
        alt="mobile palm tree background"
        fill
        className="-lg:hidden -sm:flex"
      />
      <div className="z-10 flex flex-col justify-center items-center text-almost-black  ">
        <div className="m-4">
          <Image
            src="/logo-black.png"
            height={200}
            width={400}
            alt="liminal logo black"
          ></Image>
        </div>
        <h3 className="-lg:text-4xl font-roboto_mono font-semibold p-4 text-center  text-white ">
          BLURRING THE LINE BETWEEN WHAT IS POSSIBLE
        </h3>
        <h3 className="-lg:text-4xl font-roboto_mono font-semibold mb-4 p-4 text-center  text-white -lg:ml-[60vw]">
          AND WHAT IS KNOWN.
        </h3>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  );
}
