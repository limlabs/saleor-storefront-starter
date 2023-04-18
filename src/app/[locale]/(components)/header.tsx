import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { FC } from "react";
import { CartIcon } from "./cartIcon";
import { LogoSVG } from "./logo";
import { ThemePicker } from "./theme";

// TODO:
// - fetch locales for links
// - what to use for collections link?

export const RootLayoutHeader: FC = () => {
  return (
    <header className="grid grid-cols-header-grid  text-lg bg-light-blue-main text-black justify-items- center items-center h-14 shadow-vertical-sm w-full">
      <div className="flex flex-row ml-2 items-center w-full h-full">
        <LogoSVG />
        <h1 className="ml-2 text-2xl ">Liminal Labs</h1>
      </div>
      <nav className="ml-2 w-3/5 mt-0.5">
        <ul className="flex flex-row h-full">
          {/* <li className="font-extralight tracking-widest ml-2">STORE</li> */}
          <li className="font-extralight tracking-widest hover:text-secondary">
            <Link href="/home">Home</Link>
          </li>
          <li className="font-extralight tracking-widest ml-4 hover:text-secondary">
            <Link href="/en-us/c/all">Shop</Link>
          </li>
          {/* <li className="font-extralight tracking-widest ml-4 hover:text-secondary">
            <ThemePicker />
          </li> */}
        </ul>
      </nav>
      <div className=" grid grid-cols-3 items-center justify-items-center text-l h-full mr-2 font-extralight tracking-widest  ">
        <MagnifyingGlassIcon className="w-6 h-6 hover:text-secondary cursor-pointer" />
        <CartIcon />
        <Link href="/login" className="hover:text-secondary">
          Log In
        </Link>
      </div>
    </header>
  );
};
