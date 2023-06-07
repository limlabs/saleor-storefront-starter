import React, { PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent";
  glass?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(function CardActions(
  { children, variant = "primary", glass, disabled },
  ref
) {
  const modifiers = clsx({
    glass: glass === true,
  });

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
      className={`py-4 px-16 shadow-button-shadow text-white font-roboto_mono -lg:text-xl -sm:text-base italic font-semibold ${modifiers}`}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
