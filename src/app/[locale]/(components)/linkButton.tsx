import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { Link } from "./link";
import type { LinkProps } from "./link";

interface LinkButtonProps extends LinkProps  {
  disabled?: boolean; 
}

export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({
  disabled,
  children,
  className="",
  ...props
}) => {
  const classNames = clsx("text-base-content/50", "flex", "items-center", {
    btn: !disabled,
    "btn-outline": !disabled,
  }, {[className]: !disabled});

  const btn = <span className={classNames}>{children}</span>;

  if (!disabled) {
    return <Link {...props}>{btn}</Link>;
  }

  return <>{btn}</>;
};
