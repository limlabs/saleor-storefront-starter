import { DrawerContainer } from "@/app/daisyui/drawer";
import { DrawerContent } from "@/app/daisyui/drawer/drawerContent";
import { DrawerSidebar } from "@/app/daisyui/drawer/drawerSidebar";
import type { PropsWithChildren, ReactNode } from "react";
import { PrimaryNav } from "./(header)/primaryNav";
import { MobilePrimaryNav } from "./(header)/navMobile";
import Footer from "./footer";
import { DrawerToggle } from "@/app/daisyui/drawer/drawerToggle";

interface MenuItem {
  level: number;
  name: string;
  url: string | null;
  page?: { slug: string };
  category: any; // You can replace `any` with the appropriate type if available
  children: MenuItem[];
  translation: any; // You can replace `any` with the appropriate type if available
}

interface AppRootMenuProps {
  menuItems: MenuItem[];
  children: ReactNode;
}

export default function AppRoot({ children, menuItems }: AppRootMenuProps) {
  return (
    <DrawerContainer>
      <DrawerContent>
        <PrimaryNav menuItems={menuItems} />
        {children}
        <Footer />
      </DrawerContent>
      <DrawerSidebar>
        <MobilePrimaryNav />
      </DrawerSidebar>
    </DrawerContainer>
  );
}
