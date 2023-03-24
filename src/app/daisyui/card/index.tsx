import React, { ForwardRefRenderFunction, PropsWithChildren } from 'react';
import { sizeOp, bgBlendMode } from '../util';
import clsx from 'clsx';

interface CardProps {
	glass?: boolean;
	shadow?: Sizes;
	rounded?: Sizes;
	bgBlend?: BGBlendMode;
	className?: string;
}

const Card = React.forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(function Card(
	{ children, shadow, rounded, bgBlend, glass, className = '' },
	ref
) {
	/* <div className="card bg-primary-focus"> */
	const classNames = clsx(
		'card bg-primary-focus',
		'card-borderd',
		sizeOp('shadow', shadow),
		sizeOp('rounded', rounded),
		bgBlendMode(bgBlend),
		{
			glass: glass === true
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

/*
    <Card>
        <CardHeader />
        <CardMedia />
        <CardContet />
        <CardActions />
    </Card>
*/
