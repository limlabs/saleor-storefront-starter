import { FC } from 'react';
import Card from '@/app/daisyui/card';
import CardMedia from '@/app/daisyui/card-media';
import CardBody from '@/app/daisyui/card-body';
import CardTitle from '@/app/daisyui/card-title';
import CardActions from '@/app/daisyui/card-actions';
import Button from '@/app/daisyui/button';

interface ProductCardProps {
	product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const image = product.thumbnail;

	const body = (
		<CardBody>
			<CardTitle>
				<span className="truncate w-48" title={product.name}>
					{product.name}
				</span>
			</CardTitle>
			<p className="text-accent">${product.pricing.priceRange.start.gross.amount.toFixed(2)}</p>
			<CardActions justify="center" className="mt-2">
				<Button variant="secondary">Add to Cart</Button>
			</CardActions>
		</CardBody>
	);

	return (
		<Card shadow="xl" rounded="md" bgBlend="darken" glass>
			<CardMedia accentBg src={image.url} alt={image.alt} width={300} height={300} />
			{product.pricing.onSale ? (
				<div className="indicator">
					<span className="indicator-item indicator-center badge badge-primary">Sale</span>
					{body}
				</div>
			) : (
				body
			)}
		</Card>
	);
};
