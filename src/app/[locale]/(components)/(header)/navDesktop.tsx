import Link from "next/link";
import { FC } from "react";
import { navLinks } from "./data";

export const DesktopPrimaryNav: FC = () => {
  return (
    <ul className="hidden -lg:flex menu menu-horizontal space-x-3 z-50 pr-2">
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};