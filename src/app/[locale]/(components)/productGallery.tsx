import { FC } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/app/[locale]/(components)/productCard';
import ChevronRight from '@/app/icons/chevronRight';
import ChevronLeft from '@/app/icons/chevronLeft';

interface ProductGalleryProps {
	products: ProductsPage;
	locale: string;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
	products,
	locale,
}) => {
	const { startCursor, endCursor, hasNextPage, hasPreviousPage } =
		products.pageInfo;
	console.log('products', products.edges[0].node.slug);

	return (
		<>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
				{products.edges.map(({ node }) => {
					return (
						<li
							className='carousel-item justify-center m-2'
							key={node.slug}
						>
							<ProductCard product={node} locale={locale} />
						</li>
					);
				})}
			</ul>
			<div className='divider' />
			<div className='flex justify-between'>
				{hasPreviousPage ? (
					<Link href={`/${locale}/c/all?before=${startCursor}`}>
						<span className='text-base-content/50 flex flex-row'>
							<ChevronLeft /> Prev
						</span>
					</Link>
				) : (
					<span className='text-base-content/50 flex flex-row'>
						<ChevronLeft /> Prev
					</span>
				)}

				{hasNextPage ? (
					<Link href={`/${locale}/c/all?after=${endCursor}`}>
						<span className='text-base-content/50 flex flex-row'>
							Next <ChevronRight />
						</span>
					</Link>
				) : (
					<span className='text-base-content/50 flex flex-row'>
						Next <ChevronRight />
					</span>
				)}
			</div>
		</>
	);
};
