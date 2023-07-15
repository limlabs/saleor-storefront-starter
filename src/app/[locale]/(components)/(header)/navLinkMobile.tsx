"use client";
import { Link } from "../link";
import { useDrawer } from "@/app/daisyui/drawer";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Navlink } from "./data";

export const NavLinkMobile: FC<Navlink> = ({ name, path }) => {
  const currentPath = usePathname();
  const { setSidebarOpen } = useDrawer();
  return (
    <Link
      className={clsx(
        "cursor-pointer uppercase rounded-none italic flex justify-center items-center py-3 text-[26px] font-bold border-r-2 border-l-2 border-l-light-blue-main font-mono",
        {
          "text-white bg-liminal-hot-pink border-r-[#FF9C9C]":
            currentPath === path,
          "text-dark-purp bg-[#FF9C9C] border-r-liminal-hot-pink":
            currentPath !== path,
        }
      )}
      href={path}
      onClick={() => setSidebarOpen(false)}
    >
      {name}
    </Link>
  );
};