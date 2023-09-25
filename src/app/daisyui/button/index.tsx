import React, { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "neutral";
  glass?: boolean;
  disabled?: boolean;
};

const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(function Button({ children, variant, glass, disabled, ...props }, ref) {
  const classNames = clsx("btn", {
    glass: glass === true,
    "btn-secondary": variant === "secondary",
    "btn-primary": variant === "primary",
    "w-full": true,
  });

  return (
    <button {...props} className={classNames} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
