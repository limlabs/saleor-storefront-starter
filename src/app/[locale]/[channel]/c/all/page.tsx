import gql from 'graphql-tag';
import request from 'graphql-request';
import Link from 'next/link';
import Card from '@/app/daisyui/card';
import CardMedia from '@/app/daisyui/card-media';
import CardBody from '@/app/daisyui/card-body';
import CardTitle from '@/app/daisyui/card-title';

const allProductsQuery = gql`
	{
		products(channel: "default-channel", first: 10) {
			totalCount
			edges {
				node {
					slug
					name
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

export default async function Home({ params: { locale } }: { params: { locale: string; channel: string } }) {
	const { products } = await request<HomePageProducts>(
		'https://liminal-labs.saleor.cloud/graphql/',
		allProductsQuery
	);

	return (
		<main className="container">
			<h1 className="m-4 text-xl text-secondary-content">
				<span className="text-secondary">Shop &gt;</span> All Products
			</h1>
			<ul className="grid grid-cols-4 gap-2 p-2">
				{products.edges.map(({ node }) => {
					const [ image ] = node.media;
					return (
						<li className="carousel-item m-2" key={node.slug}>
							<Link
								href={`/${locale}/p/${node.slug}`}
								className="link link-primary no-underline text-secondary hover:text-secondary"
							>
								<Card shadow="xl" rounded="md" bgBlend="darken">
									<CardMedia accentBg src={image.url} alt={image.alt} width={300} height={300} />
									<CardBody>
										<CardTitle>
											<span className="truncate w-48">{node.name}</span>
											{/* {node.name} */}
										</CardTitle>
										<p className="text-accent">
											${node.pricing.priceRange.start.gross.amount.toFixed(2)}
										</p>
										<div className="card-actions mt-2">
											<button className="btn btn-secondary">Add to Cart</button>
										</div>
									</CardBody>
								</Card>
							</Link>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
