// import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Link from "next/link";
// import { DiscordIcon } from "./discordIcon";
// import { LinkedinIcon } from "./linkedinIcon";

export default function Footer() {
  return (
    <footer className="w-90% -md:w-full mt-12 flex flex-col -md:flex-row items-start mx-auto -md:items-center p-12 bg-almost-black text-white justify-center -md:justify-between">
      <div className="-md:col-span-2">
        <Image
          src="/logo.svg"
          alt="liminal logo white"
          height={50}
          width={100}
          className="-md:scale-75 -lg:scale-100 -md:-translate-x-[12.5%] -lg:translate-x-0 mb-6 -md:mb-0"
        />
      </div>
      <div className="-md:col-span-1 flex flex-col pt-8 -lg:pt-0 items-end justify-end w-full max-w-[250px] text-lg -md:text-sm font-roboto font-extralight">
        <div className="-md:grid -md:grid-cols-12 justify-between -lg:justify-end flex w-full max-w-sm">
          <ul className="-md:col-span-6 -md:col-start-1 -md:justify-end">
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
          <div className="flex -md:col-span-6 justify-end items-center ml-4 gap-4">
            {/* <DiscordIcon />
            <LinkedinIcon /> */}
          </div>
        </div>
        <div className="pt-8 -md:pt-4 flex w-full max-w-sm text-xs -md:text-sm">
          Copyright © {new Date().getFullYear()} Liminal&nbsp;Labs&nbsp;LLC.
          All&nbsp;Rights&nbsp;Reserved.
        </div>
      </div>
    </footer>
  );
}
