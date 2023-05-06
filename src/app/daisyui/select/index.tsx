import { PropsWithChildren, forwardRef, SelectHTMLAttributes } from "react";
import clsx from "clsx";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  className?: string;
}

const Select = forwardRef<HTMLSelectElement, PropsWithChildren<SelectProps>>(
  function Select({ children, className, ...props }, ref) {
    const classNames = clsx("select", className);
    return (
      <select className={classNames} {...props} ref={ref} >
        {children}
      </select>
    );
  }
);

export default Select;
