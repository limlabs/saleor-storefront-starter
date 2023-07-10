import { DrawerContainer } from "@/app/daisyui/drawer";
import { DrawerContent } from "@/app/daisyui/drawer/drawerContent";
import { DrawerSidebar } from "@/app/daisyui/drawer/drawerSidebar";
import type { PropsWithChildren, ReactNode } from "react";
import { PrimaryNav } from "./(header)/primaryNav";
import { MobilePrimaryNav } from "./(header)/navMobile";
import Footer from "./footer";
import { DrawerToggle } from "@/app/daisyui/drawer/drawerToggle";

export default function AppRoot({ children }: PropsWithChildren) {
  return (
    <DrawerContainer>
      <DrawerToggle />
      <DrawerContent>
        <PrimaryNav />
        {children}
        <Footer />
      </DrawerContent>
      <DrawerSidebar>
        <MobilePrimaryNav />
      </DrawerSidebar>
    </DrawerContainer>
  );
}
