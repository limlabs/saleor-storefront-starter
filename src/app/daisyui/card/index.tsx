import React, { ForwardRefRenderFunction, PropsWithChildren } from 'react';
import { sizeOp, bgBlendMode } from '../util';

interface CardProps {
	shadow?: Sizes;
	rounded?: Sizes;
	bgBlend?: BGBlendMode;
	className?: string;
}

const Card = React.forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(function Card(
	{ children, shadow, rounded, bgBlend, className = '' },
	ref
) {
	/* <div className="card bg-primary-focus"> */
	return (
		<div
			ref={ref}
			className={
				'card bg-primary-focus' +
				(shadow ? ` ${sizeOp('shadow', shadow)}` : '') +
				(rounded ? ` ${sizeOp('rounded', rounded)}` : '') +
				(bgBlend ? ` ${bgBlendMode(bgBlend)}` : '') +
				(className ? ` ${className}` : '')
			}
		>
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
