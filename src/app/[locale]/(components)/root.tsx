import Drawer from "@/app/daisyui/drawer";
import { DesktopNav } from "@/app/daisyui/drawer/desktopNav";
import { DrawerContent } from "@/app/daisyui/drawer/drawerContent";
import { DrawerSide } from "@/app/daisyui/drawer/drawerSide";
import { DrawerToggle } from "@/app/daisyui/drawer/drawerToggle";
import SidebarContent from "@/app/daisyui/drawer/sidebarContent";
import navLinks from "@/app/daisyui/drawer/navLinks";

import { FC, ReactNode } from "react";
import Footer from "./footer";

/* @ts-expect-error Async Server Component */
export const AppRoot: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <>
      <div className="bg-almost-black">
        <Drawer>
          <DrawerToggle />
          <DrawerContent>
            <DesktopNav navLinks={navLinks} />
            <main id="main-content">{children}</main>
            <Footer />
          </DrawerContent>
          <DrawerSide>
            <SidebarContent navLinks={navLinks} />
          </DrawerSide>
        </Drawer>
      </div>
    </>
  );
};
