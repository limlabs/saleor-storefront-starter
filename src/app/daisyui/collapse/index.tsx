import { PropsWithChildren, forwardRef, ReactNode } from "react";
import clsx from "clsx";

interface CollapseProps {
  arrow?: boolean;
  plus?: boolean;
  title?: ReactNode | undefined;
  className?: string;
  classNameTitle?: string;
  classNameContent?: string;
}

const Collapse = forwardRef<HTMLDivElement, PropsWithChildren<CollapseProps>>(
  function Collapse(
    {
      arrow,
      plus,
      title = " ",
      className,
      classNameTitle,
      classNameContent,
      children,
    },
    ref
  ) {
    const classNames = clsx(
      "collapse",
      {
        "collapse-arrow": arrow,
        "collapse-plus": plus,
      },
      className
    );

    const classNamesTitle = clsx("collapse-title font-medium", classNameTitle);
    const classNamesContent = clsx("collapse-content", classNameContent);
    return (
      <div className={classNames} ref={ref}>
        <input type="checkbox" className="peer" />
        {title ? <div className={classNamesTitle}>{title}</div> : null}
        <div className={classNamesContent}>{children}</div>
      </div>
    );
  }
);

export default Collapse;
