import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface MenuTitleProps {
  className?: string;
}

const MenuTitle = React.forwardRef<
  HTMLLIElement,
  PropsWithChildren<MenuTitleProps>
>(function MenuTitle({ children, className }, ref) {
  const classNames = clsx("menu-title", className);

  return (
    <li className={classNames} ref={ref}>
      {children}
    </li>
  );
});

export default MenuTitle;
