import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { FC } from "react";
import { LogoSVG } from "./logo";

// TODO:
// - fetch locales for links
// - what to use for collections link?

export const RootLayoutHeader: FC = () => {
  return (
    <header className="flex flex-row text-lg">
      <div className="flex flex-row w-1/5">
        <LogoSVG />
        <h1 className="ml-2">
          Liminal Labs{" "}
          <span className="font-extralight tracking-widest ml-1">STORE</span>
        </h1>
      </div>
      <nav className="ml-2 w-3/5">
        <ul className="flex flex-row">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li className="ml-4 hover:text-secondary">
            <Link href="/en-us/c/all">Shop</Link>
          </li>
        </ul>
      </nav>
      <div className="w-1/5 grid grid-cols-3">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <Link href="/login">Log In</Link>
        <span className="ml-4">
          <ShoppingCartIcon className="w-6 h-6" />
        </span>
      </div>
    </header>
  );
};
