import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/texture-logo.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-screen  -sm:h-screen -md:h-screen -sm:shadow-none -lg:h-44  grid grid-cols-2 items-center justify-items-center  mt-0 bg-almost-black text-white">
      <div className="mr-12">
        <Image src={Logo} alt="logo" height={50} />
      </div>
      <div className="grid grid-cols-2 w-5/6 -lg:ml-40">
        <div>
          <label className="text-xl mb-4 font-roboto text-light-green">
            Company
          </label>
          <ul className="text-sm">
            <li className="cursor-pointer hover:text-light-pink">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-light-pink">Blog</li>
            <li className="cursor-pointer hover:text-light-pink">Contact</li>
          </ul>
        </div>
        <div>
          <label className="text-xl mb-4 font-roboto text-light-green">
            Products
          </label>
          <ul className="text-sm font-roboto font-extralight">
            <li className="cursor-pointer hover:text-light-pink">Software</li>
            <li className="cursor-pointer hover:text-light-pink">Media</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
