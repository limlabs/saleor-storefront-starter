import { DrawerContainer } from "@/app/daisyui/drawer";
import { DrawerContent } from "@/app/daisyui/drawer/drawerContent";
import { DrawerSidebar } from "@/app/daisyui/drawer/drawerSidebar";
import { CheckoutProvider } from "@/core/client/useCheckout";
import type { PropsWithChildren } from "react";
import { PrimaryNav } from "./(header)/primaryNav";
import { MobilePrimaryNav } from "./(header)/navMobile";
import Footer from "./footer";

export default function AppRoot({ children }: PropsWithChildren) {
  return (
    <CheckoutProvider>
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
    </CheckoutProvider>
  );
}
