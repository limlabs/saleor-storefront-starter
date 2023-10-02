"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { useDrawer } from ".";

export const DrawerContent = ({ children }: { children: ReactNode }) => {
  const { sidebarOpen } = useDrawer();
  return (
    <div
      className={clsx("drawer-content flex flex-col w-full h-full z-0 ", {
        "h-screen": sidebarOpen,
        "overflow-y-hidden": sidebarOpen,
      })}
      aria-hidden={sidebarOpen}
    >
      {children}
    </div>
  );
};
