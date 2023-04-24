import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";

export default function HomePage() {
  return (
    <div className="flex  flex-col justify-center items-center h-main-height mt-header-margin w-full  bg-almost-black">
      <h1 className="text-xl mb-6 font-roboto">
        Blurring the line between what&apos;s possible and what&apos;s not:
      </h1>

      <div className="flex flex-row justify-center items-center">
        <Image src={Logo} alt="Logo" height={110} />
      </div>
      <h1 className="text-xl mt-6">at the forefront of innovation</h1>
      <div className="mt-8">
        <Button variant="secondary">Explore the Liminal Frontier</Button>
      </div>
    </div>
  );
}
