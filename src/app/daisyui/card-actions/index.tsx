import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface CardActionsProps {
  justify?: "end" | "start" | "center";
  className?: string;
}

const CardActions = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<CardActionsProps>
>(function CardActions({ children, justify, className }, ref) {
  const classNames = clsx(
    "card-actions",
    {
      "justify-end": justify === "end",
      "justify-center": justify === "center",
      "justify-start": justify === "start",
    },
    className
  );

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  );
});

export default CardActions;
