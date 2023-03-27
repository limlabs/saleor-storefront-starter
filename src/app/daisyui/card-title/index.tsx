import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface CardTitleProps {
	className?: string;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, PropsWithChildren<CardTitleProps>>(function CardTitle(
	{ children, className },
	ref
) {
	const classNames = clsx('card-title', className);

	return (
		<h2 className={classNames} ref={ref}>
			{children}
		</h2>
	);
});

export default CardTitle;
