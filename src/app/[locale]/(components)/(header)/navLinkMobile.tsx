"use client";

import { useDrawer } from "@/app/daisyui/drawer";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Navlink } from "./data";

export const NavLinkMobile: FC<Navlink> = ({ name, path }) => {
  const currentPath = usePathname();
  const { setSidebarOpen } = useDrawer();
  return (
    <Link
      className={clsx(
        "bg-[#FF9C9C] cursor-pointer rounded-none italic py-3 text-[26px] font-bold border-r-2 border-r-liminal-hot-pink border-l-2 border-l-light-blue-main font-mono",
        {
          "text-almost-black": currentPath === path,
          "text-white": currentPath !== path,
        }
      )}
      href={path}
      onClick={() => setSidebarOpen(false)}
    >
      {name}
    </Link>
  );
};
