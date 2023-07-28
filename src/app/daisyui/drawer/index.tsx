"use client";

import clsx from "clsx";
import { createContext, ReactNode, useContext, useState } from "react";

export const DrawerContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: (sidebarOpen: boolean) => {},
});

export const DrawerContainer = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DrawerContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <div className={clsx("drawer drawer-end")}>{children}</div>
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  return useContext(DrawerContext);
};
