import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<BreadcrumbsProps>
>(function Breadcrumbs({ children, className }, ref) {
  const classNames = clsx("breadcrumbs", className);

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  );
});

export default Breadcrumbs;
