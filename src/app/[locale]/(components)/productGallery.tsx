import { FC, Fragment } from 'react';
import Link from 'next/link';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ProductCard } from '@/app/[locale]/(components)/productCard';
import { LinkButton } from './linkButton';
import { FilterOp, SearchFilter } from './searchFilter';
import { ProductCardProvider } from '@/core/client/useProductCard';
import { Page, Product } from '@/app/types';

interface ProductGalleryProps {
	products: Page<Product>;
	locale: string;
	filter: FilterOp;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
	products,
	locale,
	filter,
}) => {
	const { startCursor, endCursor, hasNextPage, hasPreviousPage } =
		products.pageInfo;

	return (
		<Fragment>
			<SearchFilter filter={filter} />
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
				{products.edges.map(({ node }) => {
					return (
						<li
							className='carousel-item justify-center m-2'
							key={node.slug}
						>
							<ProductCardProvider>
								<ProductCard product={node} locale={locale} />
							</ProductCardProvider>
						</li>
					);
				})}
			</ul>
			<div className='divider' />
			<div className='flex justify-between'>
				<LinkButton
					href={{
						pathname: `/${locale}/c/all`,
						query: {
							before: startCursor,
							...filter,
						},
					}}
					disabled={!hasPreviousPage}
				>
					<ChevronLeftIcon className='w-6 h-6' /> Prev
				</LinkButton>
				<LinkButton
					href={{
						pathname: `/${locale}/c/all`,
						query: {
							after: endCursor,
							...filter,
						},
					}}
					disabled={!hasNextPage}
				>
					Next <ChevronRightIcon className='w-6 h-6' />
				</LinkButton>
			</div>
		</Fragment>
	);
};
