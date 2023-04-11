'use client';

import { FC } from 'react';
import clsx from 'clsx';
import { sizeClass } from '@/app/daisyui/util';


interface ProductRatingProps {
    name: string;
	rating: number;
    className?: string;
    size?:  Size;
}
export const ProductRating: FC<ProductRatingProps> = ({ rating, size, name, className }) => {
    const classNames = clsx(
        'rating', 
        'rating-half',
        sizeClass('rating', size),
        className
    )
	return (
		<div className={classNames}>
			{/* <input type="radio" className="rating-hidden" /> */}
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-1" />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-2" />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-1" />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-2" />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-1" />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-2"  />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-1" defaultChecked/>
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-2" />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-1" />
			<input type="radio" name={`rating-${name}`} className="mask mask-star-2 mask-half-2" />
		</div>
	);
};
