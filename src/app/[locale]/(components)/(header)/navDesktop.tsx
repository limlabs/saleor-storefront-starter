import { FC } from "react";
import { LocaleMenu } from "../localeMenu";
import { CartIconWithCount } from "../cartIconWithCount";
import { useTranslations } from "@/core/server/useTranslations";
import Link from "next/link";
import { AccountIcon } from "./accountIcon";
import { LogoutButton } from "./logoutButton";
import { cookies } from "next/headers";

export const DesktopPrimaryNav: FC = () => {
  const t = useTranslations();
  const cookieStore = cookies();
  const session = cookieStore.get("session");

  return (
    <ul className=" px-1 hidden lg:flex justify-center items-center menu menu-horizontal space-x-3 z-50 pr-2 ">
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
      {session ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost  avatar">
            <div className="w-10 ">
              <AccountIcon />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/account-settings">
                {t("header.account settings")}
              </Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link
            className=" font-roboto font-bold text-md liminal-text"
            data-text={"log in"}
            href={"/login"}
          >
            {t("header.log in")}
          </Link>
        </li>
      )}
    </ul>
  );
};
