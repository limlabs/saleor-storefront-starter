import React, { ForwardRefRenderFunction, PropsWithChildren } from 'react';
import { sizeOp, bgBlendMode } from '../util';
import clsx from 'clsx';

interface CardProps {
	glass?: boolean;
	shadow?: Sizes;
	rounded?: Sizes;
	bgBlend?: BGBlendMode;
	className?: string;
	side?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(function Card(
	{ children, side, shadow, rounded, bgBlend, glass, className = '' },
	ref
) {
	const classNames = clsx(
		'card bg-primary-focus',
		'card-borderd',
		sizeOp('shadow', shadow),
		sizeOp('rounded', rounded),
		bgBlendMode(bgBlend),
		{
			glass: glass === true,
			'card-side': side === true
		},
		className
	);
	return (
		<div ref={ref} className={classNames}>
			{children}
		</div>
	);
});

export default Card;
