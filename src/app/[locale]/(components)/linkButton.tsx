import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import {PageLink} from "./pageLink";
import type { PageLinkProps } from "./pageLink";

interface LinkButtonProps extends PageLinkProps  {
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
    return <PageLink {...props}>{btn}</PageLink>;
  }

  return <>{btn}</>;
};
