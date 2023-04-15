import { forwardRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  ghost?: boolean;
  outline?: boolean;
  className?: string;
}

const Badge = forwardRef<HTMLDivElement, PropsWithChildren<BadgeProps>>(
  function Badge({ ghost, outline, className, children }, ref) {
    const classNames = clsx(
      "badge",
      {
        "badge-outline": outline,
        "badge-ghost": ghost,
      },
      className
    );

    return (
      <div className={classNames} ref={ref}>
        {children}
      </div>
    );
  }
);

export default Badge;
