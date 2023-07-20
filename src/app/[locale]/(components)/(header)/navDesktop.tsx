import { FC } from "react";
import { LocaleMenu } from "../localeMenu";
import { CartIconWithCount } from "../cartIconWithCount";
import { useTranslations } from "@/core/server/useTranslations";

import Link from "next/link";

export const DesktopPrimaryNav: FC = () => {
  const t = useTranslations();

  return (
    <ul className="hidden lg:flex justify-center items-center menu menu-horizontal space-x-3 z-50 pr-2 ">
      <li>
        <LocaleMenu />
      </li>

      <li className="cursor-pointer">
        <Link
          className=" font-roboto font-bold text-md liminal-text"
          data-text={"shop"}
          href={"shop"}
        >
          {t("header.shop")}
        </Link>
      </li>
      <li className="cursor-pointer">
        <Link
          className=" font-roboto font-bold text-md liminal-text"
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
