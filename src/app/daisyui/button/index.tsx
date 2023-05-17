import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary";
  glass?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(function Button({ children, variant, glass, disabled }, ref) {
  const classNames = clsx("btn", {
    glass: glass === true,
    "btn-secondary": variant === "secondary",
    "btn-primary": variant === "primary",
  });

  return (
    <button disabled={disabled} className={classNames} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
