import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  ghost?: boolean;
  outline?: boolean;
  className?: string;
}

const Badge = forwardRef<HTMLDivElement, PropsWithChildren<BadgeProps>>(
  function Badge({ ghost, outline, className, children, ...divProps }, ref) {
    const classNames = clsx(
      "badge",
      {
        "badge-outline": outline,
        "badge-ghost": ghost,
      },
      className
    );

    return (
      <div className={classNames} {...divProps} ref={ref}>
        {children}
      </div>
    );
  }
);

export default Badge;
