import Logo from "./assets/logos/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/texture-logo.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";

export default function HomeMain() {
  return (
    <footer className="z-10 w-screen  -sm:h-screen -md:h-screen -sm:shadow-none -lg:h-1/3 -lg:bg-transparent flex flex-col items-center justify-center  mt-0 bg-gradient-to-b  from-light-pink to-light-green max-w-full ">
      <div className="w-5/6">
        <label>Company</label>
        <ul>
          <li>About Us</li>
          <li>Discord</li>
          <li>Contact</li>
        </ul>
        <label>Prodcuts</label>
        <ul>
          <li>Software</li>
          <li>Media</li>
        </ul>
      </div>
    </footer>
  );
}
