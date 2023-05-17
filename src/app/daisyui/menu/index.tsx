import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface MenuProps {
  className?: string;
  horizontal?: boolean;
}

const Menu = React.forwardRef<HTMLUListElement, PropsWithChildren<MenuProps>>(
  function Menu({ children, className, horizontal }, ref) {
    const classNames = clsx(
      "menu",
      {
        "menu-horizontal": horizontal,
      },
      className
    );

    return (
      <ul className={classNames} ref={ref}>
        {children}
      </ul>
    );
  }
);

export default Menu;
