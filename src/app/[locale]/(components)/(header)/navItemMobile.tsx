"use client";

import { useDrawer } from "@/app/daisyui/drawer";
import { PropsWithChildren } from "react";

export const NavItemMobile = ({ children }: PropsWithChildren) => {
  const { setSidebarOpen } = useDrawer();
  return (
    <li className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
      {children}
    </li>
  );
};
