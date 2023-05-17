import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface CardBodyProps {
  centerItems?: boolean;
  className?: string;
}

const CardBody = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<CardBodyProps>
>(function CardBody({ centerItems, children, className }, ref) {
  const classNames = clsx(
    "card-body",
    {
      "items-center": centerItems,
    },
    className
  );

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  );
});

export default CardBody;
