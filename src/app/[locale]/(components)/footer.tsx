import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { ContactIcons } from "./contactIcons";

export default function Footer() {
  return (
    <footer className="-sm:h-3/5 -md:h-72 -sm:shadow-none -lg:h-44  -lg:grid grid-cols-2 items-center justify-items-center -lg:pl-12 py-12 mt-0 bg-almost-black text-white -sm:flex justify-center">
      <div className="mr-12 -sm:hidden -lg:flex">
        <Image src={Logo} alt="liminal logo white" height={50} />
      </div>

      <div className="-lg:grid grid-cols-2 w-5/6 justify-items-center content-center -sm:flex justify-evenly -sm:ml-8">
        <div>
          <p className="text-xl font-roboto_mono text-light-green">
            Liminal.sh
          </p>
          <ul className="-lg:text-sm -sm:text-xs -md:text-xl font-roboto font-extralight -sm:mt-2">
            <li className="cursor-pointer hover:text-light-pink mb-px">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="cursor-pointer hover:text-light-pink mb-px">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-light-pink mb-px">
              <Link href={"/services"}>Services</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-evenly items-center w-full -sm:ml-12">
          <a href="https://discord.gg/limlabs" target="_blank">
            <Image
              src="/test-contact/discord.png"
              alt="discord icon"
              height={50}
              width={50}
              className="cursor-pointer"
            />
          </a>

          <a href="https://www.linkedin.com/company/limlabs/" target="_blank">
            <Image
              src="/test-contact/linkedin.png"
              alt="linkedin icon"
              height={50}
              width={50}
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
