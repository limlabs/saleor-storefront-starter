import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

type Sizes = 'sm' | 'md' | 'lg' | 'xl';
interface CardProps {
	size?: Sizes | 'full' | number;
	shadow?: true | Sizes;
}

const Card = React.forwardRef(function Card({ children, size, shadow }) {
	{
		/* <div className="card w-96 bg-blend-darken bg-primary-focus shadow-xl m-2"> */
	}
	// <div className="card w-96 bg-primary text-primary-content">
	return (
		<div
			className={`card bg-primary text-primary-content ${clsx({
				shadow: shadow === true,
				'shadow-sm': shadow === 'sm',
				'shadow-md': shadow === 'md',
				'shadow-lg': shadow === 'lg',
				'shadow-xl': shadow === 'xl'
				// "bg-primary text-primary-content shadow-xl"
			})}`}
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
