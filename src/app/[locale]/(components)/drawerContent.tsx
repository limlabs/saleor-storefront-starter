import { FC, ReactNode } from "react";

interface DrawerContentProps {
  children: ReactNode;
}

export const DrawerContent: FC<DrawerContentProps> = ({ children }) => {
  return <div className="drawer-content">{children}</div>;
};
