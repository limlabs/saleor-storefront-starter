import { PropsWithChildren, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

interface CollapseProps {
	arrow?: boolean;
    plus?: boolean;
	title?: ReactNode | undefined;
	className?: string;
}

const Collapse = forwardRef<HTMLDivElement, PropsWithChildren<CollapseProps>> (function Collapse({ 
    arrow, 
    plus,
    title = ' ', 
    className, 
    children 
}, ref) {
	const classNames = clsx(
		'collapse',
		{
			'collapse-arrow': arrow,
            'collapse-plus': plus,
		},
		className
	);

	return (
		<div className={classNames} ref={ref}>
			<input type="checkbox" />
			{title ? <div className="collapse-title font-medium">{title}</div> : null}
			<div className="collapse-content">{children}</div>
		</div>
	);
});

export default Collapse;
