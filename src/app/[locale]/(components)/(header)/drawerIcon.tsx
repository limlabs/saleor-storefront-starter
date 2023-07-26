"use client";

import { FC } from "react";
import Image from "next/image";
import { useDrawer } from "../../../daisyui/drawer";
import hamburger from "./hamburger.png";

export const DrawerIcon: FC = () => {
  const { sidebarOpen } = useDrawer();
  return (
    <label
      htmlFor="drawerToggle"
      className="btn btn-square btn-ghost"
      aria-hidden={sidebarOpen}
    >
      <Image src={hamburger} alt="menu icon" width={30} priority height={30} />
    </label>
  );
};
