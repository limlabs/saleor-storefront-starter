import { CheckoutProvider } from "@/core/client/useCheckout";
import type { PropsWithChildren } from "react";

export default function AppRoot({ children }: PropsWithChildren) {
  return <CheckoutProvider>{children}</CheckoutProvider>;
}
