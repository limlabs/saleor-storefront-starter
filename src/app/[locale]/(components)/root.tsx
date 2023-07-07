import { DrawerContainer } from "@/app/daisyui/drawer";
import { DrawerContent } from "@/app/daisyui/drawer/drawerContent";
import { DrawerSidebar } from "@/app/daisyui/drawer/drawerSidebar";
import type { PropsWithChildren, ReactNode } from "react";
import { PrimaryNav } from "./(header)/primaryNav";
import { MobilePrimaryNav } from "./(header)/navMobile";
import Footer from "./footer";
import { DrawerToggle } from "@/app/daisyui/drawer/drawerToggle";
import { MenuItem } from "./menuTypes";

interface AppRootMenuProps {
  menuItems: MenuItem[];
  children: ReactNode;
}

export default function AppRoot({ children, menuItems }: AppRootMenuProps) {
  return (
    <DrawerContainer>
      <DrawerToggle />
      <DrawerContent>
        <PrimaryNav menuItems={menuItems} />
        {children}
        <Footer />
      </DrawerContent>
      <DrawerSidebar>
        <MobilePrimaryNav menuItems={menuItems} />
      </DrawerSidebar>
    </DrawerContainer>
  );
}
