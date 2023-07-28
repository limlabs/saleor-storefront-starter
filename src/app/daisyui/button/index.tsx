import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "neutral";
  glass?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(function Button({ children, variant, glass, disabled, onClick }, ref) {
  const classNames = clsx("btn", {
    glass: glass === true,
    "btn-secondary": variant === "secondary",
    "btn-primary": variant === "primary",
    "w-full": true,
  });

  return (
    <button
      disabled={disabled}
      className={classNames}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default Button;
