import React, { PropsWithChildren, ReactNode } from "react";

interface DrawerProps {
  id: string;
  className?: string;
  side?: ReactNode | undefined;
}

const Drawer = React.forwardRef<HTMLDivElement, PropsWithChildren<DrawerProps>>(
  function Drawer({ id, children, side, className }, ref) {
    return (
      <div className="drawer" ref={ref}>
        <input id={id} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {children}
        </div>
        <div className="drawer-side">
          <label htmlFor={id} className="drawer-overlay"></label>
          {side}
        </div>
      </div>
    );
  }
);

export default Drawer;
