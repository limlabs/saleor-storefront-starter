import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  bordered?: boolean;
  ghost?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ bordered, ghost, className, ...inputProps }, ref) {
    const classNames = clsx(
      "input",
      {
        "input-bordered": bordered,
        "input-ghost": ghost,
      },
      className
    );

    return (
      <input type="text" className={classNames} ref={ref} {...inputProps} />
    );
  }
);

export default TextInput;
