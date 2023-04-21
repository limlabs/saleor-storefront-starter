import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";

interface LinkButtonProps {
  href: Url;
  disabled?: boolean;
  className?: string;
}

export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({
  href,
  disabled,
  children,
}) => {
  const classNames = clsx("text-base-content/50", "flex", "items-center", {
    btn: !disabled,
    "btn-outline": !disabled,
  });

  const btn = <span className={classNames}>{children}</span>;

  if (!disabled) {
    return <Link href={href}>{btn}</Link>;
  }

  return <>{btn}</>;
};
