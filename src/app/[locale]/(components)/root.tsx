import { DrawerContainer } from "@/app/daisyui/drawer";
import { DrawerContent } from "@/app/daisyui/drawer/drawerContent";

import { FC, ReactNode } from "react";
import Footer from "./footer";
import { DrawerSidebar } from "@/app/daisyui/drawer/drawerSidebar";
import { MobilePrimaryNav } from "./(header)/navMobile";
import { PrimaryNav } from "./(header)/primaryNav";

export const AppRoot: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DrawerContainer>
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
};
