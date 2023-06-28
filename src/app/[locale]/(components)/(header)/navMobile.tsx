import { FC } from "react";
import { navLinks } from "./data";
import { NavLinkMobile } from "./navLinkMobile";

export const MobilePrimaryNav: FC = () => {
  return (
    <>
      <label htmlFor="drawerToggle" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-light-pink text-almost-black h-screen">
        {navLinks.map((item) => (
          <li key={item.name} className="mt-4">
            <NavLinkMobile {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};
