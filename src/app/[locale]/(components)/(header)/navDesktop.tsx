import { FC } from "react";
import { LocaleMenu } from "../localeMenu";
import { CartIconWithCount } from "../cartIconWithCount";
import { useTranslations } from "@/core/server/useTranslations";
import { MenuItem } from "@/app/types";
import Link from "next/link";
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

      <li className="cursor-pointer">
        <Link
          className="text-white font-roboto font-bold text-md liminal-text"
          data-text={"shop"}
          href={"shop"}
        >
          {t("header.shop")}
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link
          className="text-white font-roboto font-bold text-md liminal-text"
          data-text={"home"}
          href={"/"}
        >
          {t("header.home")}
        </Link>
      </li>

      <li>
        <CartIconWithCount />
      </li>
    </ul>
  );
};
