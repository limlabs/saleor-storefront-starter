import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface CardTitleProps {

}

const CardTitle = React.forwardRef<HTMLHeadingElement, PropsWithChildren<CardTitleProps>>(function CardTitle(
	{ children },
	ref
) {
	return (
		<h2 className='card-title truncate w-48'
			ref={ref}
		>
            {children}
		</h2>
	);
});

export default CardTitle;
