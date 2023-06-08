import { ReactNode } from "react";

export const DrawerSide = ({ children }: { children: ReactNode }) => {
  return <div className="drawer-side">{children}</div>;
};
