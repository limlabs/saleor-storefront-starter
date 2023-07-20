import { FC } from "react";
import { useTranslations } from "@/core/client/locale";
import { NavLinkMobile } from "./navMobileClient";

export const MobilePrimaryNav: FC = () => {
  const t = useTranslations();

  return (
    <>
      <label htmlFor="drawerToggle" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-almost-black text-almost-black h-screen">
        <li className="cursor-pointer">
          <NavLinkMobile href="/shop">{t["header"]["shop"]}</NavLinkMobile>
        </li>
        <li className="cursor-pointer">
          <NavLinkMobile href="/">{t["header"]["home"]}</NavLinkMobile>
        </li>
      </ul>
    </>
  );
};
