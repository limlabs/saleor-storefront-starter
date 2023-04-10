import React, { PropsWithChildren } from 'react';
import { boolOrSize, bgBlendMode } from '../util';
import clsx from 'clsx';

interface CardProps {
	glass?: boolean;
	shadow?: BoolOrSize;
	rounded?: BoolOrSize;
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
		boolOrSize('shadow', shadow),
		boolOrSize('rounded', rounded),
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
