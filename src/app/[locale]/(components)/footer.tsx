import Logo from "../../../../public/logo-white.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="-sm:h-3/5 -md:h-72 -sm:shadow-none -lg:h-44  grid grid-cols-2 items-center justify-items-center  mt-0 bg-almost-black text-white">
      <div className="mr-12">
        <Image src={Logo} alt="logo" height={50} />
      </div>
      <div className="grid grid-cols-2 w-5/6">
        <ul className="-lg:text-sm -sm:text-xs -md:text-xl font-roboto font-extralight -sm:mt-2">
          <li className="cursor-pointer hover:text-light-pink mb-px">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
