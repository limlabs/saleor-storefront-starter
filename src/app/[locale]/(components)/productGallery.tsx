import { FC } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/app/[locale]/(components)/productCard';

interface ProductGalleryProps {
	products: ProductsPage;
	locale: string;
}

export const ProductGallery: FC<ProductGalleryProps> = ({ products, locale }) => {
	return (
        <>
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 xs:gap-2">
			{products.edges.map(({ node }) => {
                return (
                    <li className="carousel-item justify-center m-2" key={node.slug}>
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
        </>
	);
};
