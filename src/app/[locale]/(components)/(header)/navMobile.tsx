import { FC } from "react";
import Link from "next/link";
import { useTranslations } from "@/core/server/useTranslations";
import { NavItemMobile } from "./navItemMobile";

export const MobilePrimaryNav: FC = () => {
  const t = useTranslations();

  return (
    <>
      <label htmlFor="drawerToggle" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 h-screen">
        <NavItemMobile>
          <Link
            className="font-roboto font-bold text-md liminal-text"
            data-text={"shop"}
            href={"shop"}
          >
            {t("header.shop")}
          </Link>
        </NavItemMobile>
        <NavItemMobile>
          <Link
            className="font-roboto font-bold text-md liminal-text"
            data-text={"home"}
            href={"/"}
          >
            {t("header.home")}
          </Link>
        </NavItemMobile>
      </ul>
    </>
  );
};
