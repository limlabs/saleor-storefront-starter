import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Slide from "../../../../public/slide-logo.png";
import Hero from "../../../../public/texture-logo.jpg";
import Button from "@/app/daisyui/button";
import LogoBlack from "../../../../public/logo-black.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" -sm:h-3/5 -md:h-72 -sm:shadow-none -lg:h-44  grid grid-cols-2 items-center justify-items-center  mt-0 bg-almost-black text-white -sm:p-4">
      <div className="mr-12">
        <Image src={Logo} alt="logo" height={50} />
      </div>
      <div className="grid grid-cols-2 w-5/6 -lg:ml-40">
        <div>
          <label className="-lg:text-xl -md:text-3xl -sm:text-l mb-4 font-roboto text-light-green">
            Company
          </label>
          <ul className="-lg:text-sm -sm:text-xs -md:text-xl font-roboto font-extralight -sm:mt-2">
            <li className="cursor-pointer hover:text-light-pink mb-px">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-light-pink mb-px">Blog</li>
            <li className="cursor-pointer hover:text-light-pink">Contact</li>
          </ul>
        </div>
        <div className="-sm:ml-4">
          <label className="-lg:text-xl -md:text-3xl -sm:text-l mb-4 font-roboto text-light-green">
            Products
          </label>
          <ul className="-lg:text-sm -sm:text-xs -md:text-xl font-roboto font-extralight -sm:mt-2">
            <li className="cursor-pointer hover:text-light-pink mb-px">
              Software
            </li>
            <li className="cursor-pointer hover:text-light-pink">Media</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
