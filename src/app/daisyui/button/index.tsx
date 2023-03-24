import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ButtonProps {
	variant?: 'primary' | 'secondary';
	glass?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function CardActions(
	{ children, variant, glass },
	ref
) {
	const modifiers = clsx({
		'glass': glass === true,
		'btn-secondary': variant === 'secondary',
		'btn-primary': variant === 'primary'
	});

	return (
		<button className={`btn ${modifiers}`} ref={ref}>
			{children}
		</button>
	);
});

export default Button;
