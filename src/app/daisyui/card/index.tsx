import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';
import { sizeOp, bgBlendMode } from '../util';

interface CardProps {
	shadow?: Sizes;
	rounded?: Sizes;
	bgBlend?: BGBlendMode;
	className?: string;
}

const Card = React.forwardRef(function Card({ children, shadow, rounded, bgBlend, className = '' }) {
	/* <div className="card bg-primary-focus"> */
	return (
		<div
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
}) as FC<PropsWithChildren<CardProps>>;

export default Card;

/*
    <Card>
        <CardHeader />
        <CardMedia />
        <CardContet />
        <CardActions />
    </Card>
*/
