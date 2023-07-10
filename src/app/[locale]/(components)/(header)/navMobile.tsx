import { FC } from "react";
import { MenuItem } from "@/app/types";
import Link from "next/link";
import { useTranslations } from "@/core/server/useTranslations";

interface MobilePrimaryNavProps {
  menuItems: MenuItem[];
}

export const MobilePrimaryNav: FC<MobilePrimaryNavProps> = ({ menuItems }) => {
  const t = useTranslations();

  return (
    <>
      <label htmlFor="drawerToggle" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-almost-black text-almost-black h-screen">
        {menuItems.map((link) => (
          <li key={link.name} className="cursor-pointer">
            <Link
              className="text-white font-roboto font-bold text-md liminal-text"
              data-text={link.name}
              href={`/${link.page?.slug!}`}
            >
              {t(`header.${link.name.toLowerCase()}`)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
