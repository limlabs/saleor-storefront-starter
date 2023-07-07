import Link from "next/link";
import { FC } from "react";
import { LocaleMenu } from "../localeMenu";
import { CartIconWithCount } from "../cartIconWithCount";
import { useTranslations } from "@/core/server/useTranslations";
import { MenuItem } from "../menuTypes";

interface DesktopPrimaryNavMenuProps {
  menuItems: MenuItem[];
}

export const DesktopPrimaryNav: FC<DesktopPrimaryNavMenuProps> = ({
  menuItems,
}) => {
  const t = useTranslations();

  return (
    <ul className="hidden lg:flex justify-center items-center menu menu-horizontal space-x-3 z-50 pr-2 ">
      <li>
        <LocaleMenu />
      </li>
      {menuItems.map((link) => (
        <li key={link.name} className="cursor-pointer">
          <Link
            className="text-white font-roboto font-bold text-md liminal-text"
            data-text={link.name}
            href={`/${link.page?.slug!}`}
          >
            {/* {t(`header.${link.page?.slug!}`)} */}
            {t(`header.${link.page?.slug!}`)}
          </Link>
        </li>
      ))}

      <li>
        <CartIconWithCount />
      </li>
    </ul>
  );
};
