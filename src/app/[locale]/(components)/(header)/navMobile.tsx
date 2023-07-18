"use client";
import { FC } from "react";
import Link from "next/link";
import { useTranslations } from "@/core/server/useTranslations";
import { useDrawer } from "@/app/daisyui/drawer";

export const MobilePrimaryNav: FC = () => {
  const t = useTranslations();
  const { setSidebarOpen } = useDrawer();

  return (
    <>
      <label htmlFor="drawerToggle" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 h-screen">
        <li className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
          <Link
            className="font-roboto font-bold text-md liminal-text"
            data-text={"shop"}
            href={"shop"}
          >
            {t("header.shop")}
          </Link>
        </li>
        <li className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
          <Link
            className="font-roboto font-bold text-md liminal-text"
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
