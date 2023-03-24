import React, { ForwardRefRenderFunction } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface CardMediaProps {
	src: string;
	loader?: <T extends { src: string }>(args: T) => string;
	alt: string;
	accentBg?: true;
	width?: number;
	height?: number;
	fill?: boolean;
}

const CardMedia = React.forwardRef<HTMLElement, CardMediaProps>(function Card(
	{ accentBg, src, loader, alt = '', ...imgArgs },
	ref
) {
	const classNames = clsx({
		'bg-accent-content': accentBg
	});

	return (
		<figure ref={ref} className={classNames}>
			<Image src={src} loader={loader} alt={alt} {...imgArgs} />
		</figure>
	);
});

export default CardMedia;
