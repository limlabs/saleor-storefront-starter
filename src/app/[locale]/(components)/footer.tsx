import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { DiscordIcon } from "./discordIcon";
import { LinkedinIcon } from "./linkedinIcon";

export default function Footer() {
  return (
    <footer className="w-full mt-12 -sm:flex -sm:flex-col -md:grid -md:grid-cols-3 items-center -md:px-12 -md:pr-12 py-12 bg-almost-black text-white justify-center">
      <div>
        <Image
          src={Logo}
          alt="liminal logo white"
          height={50}
          className="-md:scale-75 -lg:scale-100 -md:-translate-x-[12.5%] -lg:translate-x-0 -sm:mb-6 -md:mb-0"
        />
      </div>
      <div className="m-auto w-full max-w-xs pt-2 pb-4 text-center">
        Copyright © {new Date().getFullYear()} Liminal Labs LLC.
        All&nbsp;Rights&nbsp;Reserved.
      </div>
      <div className="-sm:justify-between -md:justify-end -sm:flex w-full -sm:max-w-[90%] -md:max-w-none">
        <ul className="-sm:text-lg -md:text-sm font-roboto font-extralight">
          <li className="cursor-pointer hover:text-light-pink mb-px">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-light-pink mb-px">
            <Link href={"/privacy.html"}>Privacy Policy</Link>
          </li>
          <li className="cursor-pointer hover:text-light-pink mb-px">
            <Link href={"/en-us/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="flex justify-end items-center -sm:ml-4 gap-4">
          <DiscordIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
}
