import { FC } from "react";

import Link from "next/link";
import { useTranslations } from "@/core/server/useTranslations";

export const MobilePrimaryNav: FC = () => {
  const t = useTranslations();

  return (
    <>
      <label htmlFor="drawerToggle" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-almost-black text-almost-black h-screen">
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
      </ul>
    </>
  );
};
