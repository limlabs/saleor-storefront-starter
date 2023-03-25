import gql from 'graphql-tag';
import request from 'graphql-request';
import Link from 'next/link';
import { ProductCard } from '@/app/[locale]/(components)/productCard';

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
	products: {
		totalCount: number;
		edges: {
			node: Product;
		}[];
	};
}

export default async function Home({ params: { locale } }: { params: { locale: string; channel: string } }) {
	const { products } = await request<
		HomePageProducts
	>('https://liminal-labs.saleor.cloud/graphql/', allProductsQuery, { first: 20 });

	return (
		<main className="container">
			<h1 className="m-4 text-xl text-secondary-content">
				<span className="text-secondary">Shop &gt;</span> All Products
			</h1>
			<ul className="grid w-full md:grid-cols-2 lg:grid-cols-4 lg:gap-2 md:gap-2">
				{products.edges.map(({ node }) => {
					return (
						<li className="carousel-item md:justify-center m-2" key={node.slug}>
							<Link
								href={`/${locale}/p/${node.slug}`}
								className="link link-primary no-underline text-secondary hover:text-secondary"
							>
								<ProductCard product={node} />
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="btn-group">
				<input type="radio" name="page" data-title="1" className="btn" />
				<input type="radio" name="page" data-title="2" className="btn" />
				<input type="radio" name="page" data-title="3" className="btn" />
				<input type="radio" name="page" data-title="4" className="btn" />
			</div>
		</main>
	);
}
