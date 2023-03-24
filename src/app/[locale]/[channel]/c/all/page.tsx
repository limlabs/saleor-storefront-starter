import gql from 'graphql-tag';
import request from 'graphql-request';
import Link from 'next/link';
import Card from '@/app/daisyui/card';
import CardMedia from '@/app/daisyui/card-media';
import CardBody from '@/app/daisyui/card-body';
import CardTitle from '@/app/daisyui/card-title';
import CardActions from '@/app/daisyui/card-actions';
import Button from '@/app/daisyui/button';

const allProductsQuery = gql`
	{
		products(channel: "default-channel", first: 10) {
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
			node: {
				slug: string;
				name: string;
				media: {
					url: string;
					alt: string;
				}[];
				thumbnail: {
					url: string;
					alt: string;
				};
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
					// const [ image ] = node.media;
					const image = node.thumbnail;
					return (
						<li className="carousel-item m-2" key={node.slug}>
							<Link
								href={`/${locale}/p/${node.slug}`}
								className="link link-primary no-underline text-secondary hover:text-secondary"
							>							
								<Card shadow="xl" rounded="md" bgBlend="darken" glass>
									<CardMedia accentBg src={image.url} alt={image.alt} width={300} height={300} />
									<CardBody>
										<CardTitle>
											<span className="truncate w-48" title={node.name}>
												{node.name}
											</span>
										</CardTitle>
										<p className="text-accent">
											${node.pricing.priceRange.start.gross.amount.toFixed(2)}
										</p>
										<CardActions justify='end' className='mt-2'>
											<Button variant='secondary'>Add to Cart</Button>
										</CardActions>
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
