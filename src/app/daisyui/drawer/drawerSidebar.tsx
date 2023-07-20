"use client";

import { ReactNode } from "react";
import { useDrawer } from ".";

export const DrawerSidebar = ({ children }: { children: ReactNode }) => {
  const { sidebarOpen } = useDrawer();

  return (
    <div className="drawer-side relative z-30 " aria-hidden={!sidebarOpen}>
      {children}
    </div>
  );
};
