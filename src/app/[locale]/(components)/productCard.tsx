import { Dispatch, FC, SetStateAction } from 'react';
import Card from '@/app/daisyui/card';
import CardMedia from '@/app/daisyui/card-media';
import CardBody from '@/app/daisyui/card-body';
import CardTitle from '@/app/daisyui/card-title';
import CardActions from '@/app/daisyui/card-actions';
import { ProductCardButton } from './productCardButton';
import Link from 'next/link';
import { Product } from '@/app/types';
import { QuantitySelector } from './quantitySelector';

interface ProductCardProps {
	product: Product;
	locale: string;
	quantity: number;
	updateQuantity: Dispatch<SetStateAction<number>>;
}

export const ProductCard: FC<ProductCardProps> = ({
	product,
	locale,
	quantity,
	updateQuantity,
}) => {
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
				<QuantitySelector
					quantity={quantity}
					updateQuantity={updateQuantity}
				/>
			</div>
			<CardActions justify='center' className='mt-2'>
				<ProductCardButton
					text='Add to Cart'
					variantID={product.defaultVariant.id}
					quantity={quantity}
					updateQuantity={updateQuantity}
				/>
			</CardActions>
		</CardBody>
	);

	return (
		<Card shadow='xl' rounded='md' bgBlend='darken' glass>
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
