import Image from 'next/image';
import gql from 'graphql-tag';
import request from 'graphql-request';
import Link from 'next/link';
import { ProductCardButton } from './AddToCartButton';

const allProductsQuery = gql`
	{
		products(channel: "default-channel", first: 10) {
			totalCount
			edges {
				node {
					slug
					name
					variants {
						id
					}
					media {
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
			node: {
				slug: string;
				name: string;
				variants: {
					id: string;
				}[];
				media: {
					url: string;
					alt: string;
				}[];
				pricing: {
					priceRange: {
						start: {
							gross: {
								amount: number;
								currency: string;
							};
						};
					};
				};
			};
		}[];
	};
}

export default async function Home({
	params: { locale },
}: {
	params: { locale: string; channel: string };
}) {
	const { products } = await request<HomePageProducts>(
		'https://liminal-labs.saleor.cloud/graphql/',
		allProductsQuery
	);

	return (
		<main className='container'>
			<h1 className='m-4 text-xl text-secondary-content'>
				<span className='text-secondary'>Shop &gt;</span> All Products
			</h1>
			<ul className='grid grid-cols-4 gap-2 p-2'>
				{products.edges.map(({ node }) => {
					const [image] = node.media;
					return (
						<li className='carousel-item' key={node.slug}>
							<div className='card w-96 bg-blend-darken bg-primary-focus shadow-xl m-2 '>
								<Link
									href={`/${locale}/p/${node.slug}`}
									className='link link-primary no-underline text-secondary hover:text-secondary'
								>
									<figure className='bg-accent-content rounded-tl-md rounded-tr-md'>
										<Image
											src={image.url}
											alt={image.alt}
											width={300}
											height={300}
										/>
									</figure>
								</Link>
								<div className='card-body'>
									<Link
										href={`/${locale}/p/${node.slug}`}
										className='link link-primary no-underline text-secondary hover:text-secondary'
									>
										<h2 className='card-title'>
											<span className='truncate w-48'>
												{node.name}
											</span>
										</h2>
									</Link>
									<p className='text-accent'>
										$
										{node.pricing.priceRange.start.gross.amount.toFixed(
											2
										)}
									</p>
									<ProductCardButton
										text='Add to Cart'
										variantID={node.variants[0].id}
									/>
								</div>
								<div className='card-actions mt-2'></div>
							</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
