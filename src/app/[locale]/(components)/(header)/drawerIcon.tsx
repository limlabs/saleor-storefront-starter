"use client";

import { FC } from "react";
import Image from "next/image";
import { useDrawer } from "../../../daisyui/drawer";

export const DrawerIcon: FC = () => {
  const { sidebarOpen } = useDrawer();
  return (
    <label
      htmlFor="drawerToggle"
      className="btn btn-square btn-ghost"
      aria-hidden={sidebarOpen}
    >
      <Image
        src={"/img/icons/hamburger.png"}
        alt="menu icon"
        width={30}
        height={22.125}
      />
    </label>
  );
};
