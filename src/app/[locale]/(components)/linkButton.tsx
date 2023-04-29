import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { LocaleLink } from "./localeLink";
import type { LocaleLinkProps } from "./localeLink";

interface LinkButtonProps extends LocaleLinkProps  {
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
    return <LocaleLink {...props}>{btn}</LocaleLink>;
  }

  return <>{btn}</>;
};
