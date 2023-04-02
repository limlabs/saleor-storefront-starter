import { ProductGallery } from '@/app/[locale]/(components)/productGallery';
import { gqlClient } from '@/gql';

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
	const { products } = await gqlClient.products(
		{...(before ? { before, last: 8 } : { after, first: 8 })}
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
