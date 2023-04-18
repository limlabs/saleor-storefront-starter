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
    <header className="flex flex-row text-lg bg-light-green text-black justify-center items-center h-14">
      <div className="flex flex-row mr-8 justify-center items-center">
        <LogoSVG />
        <h1 className="ml-2 text-2xl">Liminal Labs </h1>
      </div>
      <nav className="ml-2 w-3/5">
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
      <div className="w-1/5 grid grid-cols-3 flex-row items-center justify-items-center text-sm h-full">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <CartIcon />
        <Link href="/login">Log In</Link>
      </div>
    </header>
  );
};
