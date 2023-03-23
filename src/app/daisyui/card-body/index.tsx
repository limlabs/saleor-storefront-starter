import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface CardBodyProps {
	centerText?: boolean;
	centerItems?: boolean;
}

const CardBody = React.forwardRef<HTMLDivElement, PropsWithChildren<CardBodyProps>>(function Card(
	{ centerItems, centerText, children },
	ref
) {
	const modifiers = clsx({
		'text-center': centerText,
		'items-center': centerItems
	});

	return (
		<div className={`card-body ${modifiers}`} ref={ref}>
			{children}
		</div>
	);
});

export default CardBody;
