import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Logo from "../../../../public/logo-black.png";

export default function HomeText() {
  return (
    <div className="flex justify-center flex-col items-center w-full relative mt-12">
      <Image src={Logo} alt="logo" height={50} />
      <p className="text-almost-black font-roboto text-lg mt-8">
        Blurring the line between what is known...
      </p>
      <p className="text-almost-black font-roboto text-lg mt-6">
        and what is possible.
      </p>
    </div>
  );
}
