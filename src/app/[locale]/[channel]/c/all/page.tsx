import gql from 'graphql-tag';
import request from 'graphql-request';
import { ProductGallery } from '@/app/[locale]/(components)/productGallery';
import { ProductsPage } from '@/app/types';

const allProductsQuery = gql`
	query getProductList(
		$first: Int
		$last: Int
		$after: String
		$before: String
	) {
		products(
			channel: "default-channel"
			first: $first
			last: $last
			after: $after
			before: $before
		) {
			totalCount
			pageInfo {
				endCursor
				startCursor
				hasNextPage
				hasPreviousPage
			}
			edges {
				node {
					id
					slug
					name
					defaultVariant {
						id
					}
					media {
						url
						alt
					}
					thumbnail(size: 300) {
						url
						alt
					}
					pricing {
						onSale
						priceRange {
							start {
								gross {
									amount
									currency
								}
							}
						}
					}
				}
			}
		}
	}
`;

interface HomePageProducts {
	products: ProductsPage;
}

interface PageProps {
	params: {
		locale: string;
		channel: string;
	};
	searchParams?: {
		after?: string;
		before?: string;
	};
}

export default async function Home({
	params: { locale },
	searchParams = {},
}: PageProps) {
	const { before, after } = searchParams;
	const { products } = await request<HomePageProducts>(
		'https://liminal-labs.saleor.cloud/graphql/',
		allProductsQuery,
		{
			...(before ? { before, last: 8 } : { after, first: 8 }),
		}
	);

	return (
		<main>
			<h1 className='m-4 text-xl text-secondary-content'>
				<div className='text-sm breadcrumbs'>
					<ul>
						<li className='text-secondary'>Shop</li>
						<li>All Products</li>
					</ul>
				</div>
			</h1>
			<section className='container mx-auto'>
				<ProductGallery products={products} locale={locale} />
			</section>
		</main>
	);
}
