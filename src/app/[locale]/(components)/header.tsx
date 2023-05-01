import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "./cartIcon";
import type { FC } from "react";

// TODO:
// - fetch locales for links
// - what to use for collections link?

export const RootLayoutHeader: FC = () => {
  return (
    <header className="flex flex-row text-lg items-center justify-between text-primary sm:px-4 lg:px-2">
      <div className="flex flex-row px-2">
        <Image src="/logo.svg" width={190} height={60} alt="LIMINAL logo" />
      </div>
      <nav className="w-3/5">
        <ul className="flex flex-row">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li className="ml-4 hover:text-secondary">
            <Link href="/c/all">Shop</Link>
          </li>
        </ul>
      </nav>

      <CartIcon />
    </header>
  );
};
