import { ReactNode } from "react";

export const DrawerContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer-content flex flex-col  w-full overflow-x-hidden relative z-20">
      {children}
    </div>
  );
};
