
import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Button from "@/app/daisyui/button";


export default function HomePage() {
  return (
    <main className="flex justify-center mx-auto  w-full max-w-7xl h-main-height  bg-forest-green">
      <div className="flex  flex-col justify-center items-center h-full  w-10/12 bg-almost-black">
        <h1 className="text-xl mb-6">
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
    </main>
  );
}
