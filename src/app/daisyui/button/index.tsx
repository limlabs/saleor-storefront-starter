import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ButtonProps {
	variant?: 'primary' | 'secondary';
	glass?: boolean;
	disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(function CardActions(
	{ children, variant, glass, disabled },
	ref
) {
	const modifiers = clsx({
		'glass': glass === true,
		'btn-secondary': variant === 'secondary',
		'btn-primary': variant === 'primary'
	});

	return (
		<button  disabled={disabled} className={`btn ${modifiers}`} ref={ref}>
			{children}
		</button>
	);
});

export default Button;
