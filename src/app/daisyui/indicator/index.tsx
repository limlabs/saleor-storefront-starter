import { PropsWithChildren, forwardRef, ReactNode, Fragment } from 'react';
import Badge, { BadgeProps } from '../badge';
import clsx from 'clsx';

interface IndicatorProps extends BadgeProps {
	show?: boolean;
	top?: boolean;
	middle?: boolean;
	bottom?: boolean;
	start?: boolean;
	center?: boolean;
	end?: boolean;
	content: ReactNode;
	className?: string;
}

const Indicator = forwardRef<HTMLDivElement, PropsWithChildren<IndicatorProps>>(function Indicator(
	{ show, top, middle, bottom, start, center, end, content, ghost, outline, className, children },
	ref
) {
	if (!show) return <Fragment>{children}</Fragment>;

	const classNames = clsx(
		'indicator-item',
		{
			'indicator-top': top,
			'indicator-middle': middle,
			'indicator-bottom': bottom,
			'indicator-start': start,
			'indicator-center': center,
			'indicator-end': end
		},
		className
	);

	return (
		<div className="indicator" ref={ref}>
			<Badge ghost={ghost} outline={outline} className={classNames}>
				{content}
			</Badge>
			{children}
		</div>
	);
});

export default Indicator;
