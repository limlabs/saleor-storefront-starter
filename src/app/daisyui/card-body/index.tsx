import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface CardBodyProps {
	centerItems?: boolean;
}

const CardBody = React.forwardRef<HTMLDivElement, PropsWithChildren<CardBodyProps>>(function Card(
	{ centerItems, children },
	ref
) {
	const classNames = clsx('card-body', {
		'items-center': centerItems
	});

	return (
		<div className={classNames} ref={ref}>
			{children}
		</div>
	);
});

export default CardBody;
