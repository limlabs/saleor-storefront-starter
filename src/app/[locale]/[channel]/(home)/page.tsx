import { ArrowPathIcon } from "@heroicons/react/24/solid";
import background from "./assets/textures/centered-logo.jpg";
import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container mx-auto my-auto w-full max-w-7xl h-full max-h-screen">
      <div className="flex flex-row">
        <h1>
          Software that blurs the line between what&apos;s possible and
          what&apos;s not:
        </h1>
        <div className="flex flex-row justify-center items-center">
          <Image src={Logo} alt="Logo" height={125} />
        </div>
        <h1>at the forefront of innovation</h1>
      </div>
    </main>
  );
}
