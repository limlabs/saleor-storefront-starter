import clsx from "clsx";

export type PaletteBase =
  | "primary"
  | "accent"
  | "neutral"
  | "secondary"
  | "success"
  | "info"
  | "error"
  | "warning";

export function roundedClass(size?: BoolOrSize) {
  return clsx({
    "rounded-none": size === false,
    rounded: size === true,
    "rounded-sm": size === "sm",
    "rounded-md": size === "md",
    "rounded-lg": size === "lg",
    "rounded-xl": size === "xl",
  });
}

export function shadowClass(size?: BoolOrSize) {
  return clsx({
    "shadow-none": size === false,
    shadow: size === true,
    "shadow-sm": size === "sm",
    "shadow-md": size === "md",
    "shadow-lg": size === "lg",
    "shadow-xl": size === "xl",
  });
}

export function bgBlendMode(effect?: BGBlendMode) {
  return clsx({
    "bg-blend-normal": effect === "normal",
    "bg-blend-multiply": effect === "multiply",
    "bg-blend-screen": effect === "screen",
    "bg-blend-overlay": effect === "overlay",
    "bg-blend-darken": effect === "darken",
    "bg-blend-lighten": effect === "lighten",
  });
}
export function textColorClass(
  color?: PaletteBase | `${PaletteBase}${"-focus" | "-content"}`
) {
  return clsx({
    "text-primary": color === "primary",
    "text-accent": color === "accent",
    "text-neutral": color === "neutral",
    "text-secondary": color === "secondary",
    "text-success": color === "success",
    "text-info": color === "info",
    "text-error": color === "error",
    "text-warning": color === "warning",
    "text-primary-focus": color === "primary-focus",
    "text-primary-content": color === "primary-content",
    "text-accent-focus": color === "accent-focus",
    "text-accent-content": color === "accent-content",
    "text-neutral-focus": color === "neutral-focus",
    "text-neutral-content": color === "neutral-content",
    "text-secondary-focus": color === "secondary-focus",
    "text-secondary-content": color === "secondary-content",
    "text-success-focus": color === "success-focus",
    "text-success-content": color === "success-content",
    "text-info-focus": color === "info-focus",
    "text-info-content": color === "info-content",
    "text-error-focus": color === "error-focus",
    "text-error-content": color === "error-content",
    "text-warning-focus": color === "warning-focus",
    "text-warning-content": color === "warning-content",
  });
}
