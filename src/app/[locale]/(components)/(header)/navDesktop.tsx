import Link from "next/link";
import { FC } from "react";
import { navLinks } from "./data";
import { LocaleMenu } from "../localeMenu";
import { CartIconWithCount } from "../cartIconWithCount";

export const DesktopPrimaryNav: FC = () => {
  return (
    <ul className="hidden lg:flex justify-center items-center menu menu-horizontal space-x-3 z-50 pr-2 ">
      <li>
        <LocaleMenu />
      </li>
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link
            className="text-white font-roboto font-bold text-md liminal-text"
            data-text={link.name}
            href={link.path}
          >
            {link.name}
          </Link>
        </li>
      ))}

      <li>
        <CartIconWithCount />
      </li>
    </ul>
  );
};
