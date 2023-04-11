import { FC } from 'react';
import Card from '@/app/daisyui/card';
import CardMedia from '@/app/daisyui/card-media';
import CardBody from '@/app/daisyui/card-body';
import CardTitle from '@/app/daisyui/card-title';
import CardActions from '@/app/daisyui/card-actions';
import { ProductCardButton } from './productCardButton';
import { ProductRating } from './productRating';
import Link from 'next/link';
import { Product } from '@/app/types';
import { QuantitySelector } from './quantitySelector';

interface ProductCardProps {
	product: Product;
	locale: string;
}

export const ProductCard: FC<ProductCardProps> = ({ product, locale }) => {
	const image = product.thumbnail;

	const body = (
		<CardBody>
			<Link
				href={`/${locale}/p/${product.slug}`}
				className='link link-primary no-underline text-secondary hover:text-secondary'
			>
				<CardTitle>
					<span className='truncate w-48' title={product.name}>
						{product.name}
					</span>
				</CardTitle>
			</Link>
			<div className='flex flex-row place-content-between'>
				<span className='text-accent'>
					${product.pricing.priceRange.start.gross.amount.toFixed(2)}
				</span>
				<QuantitySelector />
			</div>
			<CardActions justify='center' className='mt-2'>
				<ProductCardButton
					text='Add to Cart'
					variantID={product.defaultVariant.id}
				/>
			</CardActions>
		</CardBody>
	);

	return (
		<Card shadow='xl' rounded='md' bgBlend='darken' glass className='relative transition ease-in-out hover:-translate-y-1'>
			<ProductRating name={product.slug} size="sm" rating={product.rating} className='absolute'/>
			<Link
				href={`/${locale}/p/${product.slug}`}
				className='link link-primary no-underline text-secondary hover:text-secondary'
			>
				<CardMedia
					accentBg
					src={image.url}
					alt={image.alt}
					width={300}
					height={300}
				/>
			</Link>
			{product.pricing.onSale ? (
				<div className='indicator'>
					<span className='indicator-item indicator-center badge badge-primary'>
						Sale
					</span>
					{body}
				</div>
			) : (
				body
			)}
		</Card>
	);
};
