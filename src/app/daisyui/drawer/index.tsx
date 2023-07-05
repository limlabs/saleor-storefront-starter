"use client";

import clsx from "clsx";
import { createContext, ReactNode, useContext, useState } from "react";
import { DrawerToggle } from "./drawerToggle";

export const DrawerContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: (sidebarOpen: boolean) => {},
});

export const DrawerContainer = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DrawerContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <DrawerToggle />
      <div className={clsx("drawer drawer-end")}>{children}</div>
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(DrawerContext);
};
