import { FC } from 'react';
import Card from '@/app/daisyui/card';
import CardMedia from '@/app/daisyui/card-media';
import CardBody from '@/app/daisyui/card-body';
import CardTitle from '@/app/daisyui/card-title';
import CardActions from '@/app/daisyui/card-actions';
import Button from '@/app/daisyui/button';

export const ProductCardSkeleton: FC = () => {
	return (
		<Card shadow="xl" rounded="md" className="mix-blend-overlay bg-slate-800" >
			<CardMedia accentBg src="/placeholder.svg" alt="" width={300} height={300} className="mix-blend-overlay" />
			<CardBody>
				<CardTitle>-</CardTitle>
				<p className="text-accent">$ - </p>
				<CardActions justify="end" className="mt-2">
					<Button variant="secondary" disabled>
						Add to Cart
					</Button>
				</CardActions>
			</CardBody>
		</Card>
	);
};
