import Image from 'next/image';
import React, { FC } from 'react';
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

const CardMedia = React.forwardRef(function Card({ accentBg, src, loader, alt = '', ...imgArgs }) {    
	return (
		<figure
			className={clsx({
				'bg-accent-content': accentBg
			})}
		>
			<Image src={src} loader={loader} alt={alt} {...imgArgs} />
		</figure>
	);
}) as FC<CardMediaProps>;

export default CardMedia;
