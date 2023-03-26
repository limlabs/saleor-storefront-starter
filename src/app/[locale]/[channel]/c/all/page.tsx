import gql from 'graphql-tag';
import request from 'graphql-request';
import { ProductGallery } from '@/app/[locale]/(components)/productGallery';

const allProductsQuery = gql`
	query getProductList($first: Int!) {
		products(channel: "default-channel", first: $first) {
			totalCount
			edges {
				node {
					id
					slug
					name
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

export default async function Home({ params: { locale } }: { params: { locale: string; channel: string } }) {
	const { products } = await request<
		HomePageProducts
	>('https://liminal-labs.saleor.cloud/graphql/', allProductsQuery, { first: 20 });

	return (
		<main>
			<h1 className="m-4 text-xl text-secondary-content">
				<span className="text-secondary">Shop &gt;</span> All Products
			</h1>
			<section className="container mx-auto">
				<ProductGallery products={products} locale={locale} />			
			</section>			
		</main>
	);
}
