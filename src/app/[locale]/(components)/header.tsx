import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { FC } from "react";
import { CartIcon } from "./cartIcon";
import hamburger from "../../../../public/hamburger.png";
import { LogoSVG } from "./logo";
import Logo from "../../../../public/slide-logo.png";
import { ThemePicker } from "./theme";
import Image from "next/image";

// TODO:
// - fetch locales for links
// - what to use for collections link?

export const RootLayoutHeader: FC = () => {
  return (
    <header className="fixed top-0 z-10 grid grid-cols-header-grid  text-lg bg-almost-black text-white justify-items- center items-center h-header-height shadow-vertical-sm w-full ">
      <div className="flex flex-row ml-2 items-center w-full h-full min-w-max">
        <LogoSVG />
        <h1 className="ml-2 text-2xl font-roboto">Liminal Labs</h1>
      </div>
      <nav className=" w-3/5 text-white ml-4">
        <ul className="flex flex-row h-full -sm:hidden -md:flex -lg:flex">
          <li className="font-extralight tracking-widest hover:text-secondary">
            <Link href="/home">Home</Link>
          </li>
          <li className="font-extralight tracking-widest ml-4 hover:text-secondary">
            <Link href="/en-us/c/all">Shop</Link>
          </li>
        </ul>
      </nav>
      <div className=" grid grid-cols-3 items-center justify-items-center text-l h-full mr-2 font-extralight tracking-widest  min-w-max -sm:hidden -md:grid -lg:grid text-white">
        <MagnifyingGlassIcon className="w-6 h-6 hover:text-secondary cursor-pointer" />
        <CartIcon />
        <Link href="/login" className="hover:text-secondary">
          Log In
        </Link>
      </div>
      <div className="hidden -sm:flex -md:hidden -lg:hidden mr-2">
        <Image src={hamburger} height={50} alt="hamburger-icon" />
      </div>
    </header>
  );
};
