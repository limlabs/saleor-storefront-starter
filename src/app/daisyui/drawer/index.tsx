import React, { ReactNode } from "react";

const Drawer = ({ children }: { children: ReactNode }) => {
  return <div className="drawer drawer-end">{children}</div>;
};

export default Drawer;
