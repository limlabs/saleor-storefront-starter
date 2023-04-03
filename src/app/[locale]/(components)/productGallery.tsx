import { FC } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/app/[locale]/(components)/productCard';
import ChevronRight from '@/app/icons/chevronRight';
import ChevronLeft from '@/app/icons/chevronLeft';
import { LinkButton } from './linkButton';

interface ProductGalleryProps {
	products: ProductList;
	locale: string;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
	products,
	locale,
}) => {
	const { startCursor, endCursor, hasNextPage, hasPreviousPage } =
		products.pageInfo;

	return (
		<>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
				{products.edges.map(({ node }) => {
					return (
						<li
							className='carousel-item justify-center m-2'
							key={node.slug}
						>
							<Link
								href={`/${locale}/p/${node.slug}`}
								className='link link-primary no-underline text-secondary hover:text-secondary'
							></Link>
							<ProductCard product={node} />
						</li>
					);
				})}
			</ul>
			<div className='divider' />
			<div className='flex justify-between'>
				<LinkButton href={`/${locale}/c/all?before=${startCursor}`} disabled={!hasPreviousPage}>
					<ChevronLeft /> Prev
				</LinkButton>
				<LinkButton href={`/${locale}/c/all?after=${endCursor}`} disabled={!hasNextPage}>
					Next <ChevronRight />
				</LinkButton>
			</div>
		</>
	);
};
