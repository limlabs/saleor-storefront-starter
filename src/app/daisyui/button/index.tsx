import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
  glass?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(function CardActions(
  { children, variant = "primary", glass, disabled, className },
  ref
) {
  const classes = clsx(
    {
      glass: glass === true,
    },
    `py-4 px-16 shadow-button-shadow -lg:text-xl -sm:text-base italic font-semibold`,
    className
  );

  const backgroundColors = {
    primary: "rgb(5, 249, 249)",
    secondary: "rgb(255, 21, 236)",
    accent: "rgb(157, 255, 212)",
  };

  const backgroundColor = backgroundColors[variant]; // 'variant' will always be defined here

  return (
    <button
      disabled={disabled}
      style={{ backgroundColor }}
      className={classes}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
