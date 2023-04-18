import { ArrowPathIcon } from "@heroicons/react/24/solid";
import background from "./assets/textures/centered-logo.jpg";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container mx-auto my-auto w-full max-w-7xl h-full max-h-screen">
      <h1 className="mt-12 flex flex-row justify-center items-center">
        <div className="flex">
          <Image src={background} alt="background" />
        </div>
        <span className="text-3xl text-secondary"></span>
      </h1>
    </main>
  );
}
