import { Dispatch, SetStateAction } from 'react';

interface ProductImage {
	url: string;
	alt: string;
}

interface Product {
	slug: string;
	name: string;
	defaultVariant: {
		id: string;
	};
	media: ProductImage[];
	thumbnail: ProductImage;
	isAvailable: boolean;
	pricing: {
		onSale: boolean;
		priceRange: {
			start: {
				gross: {
					amount: number;
					currency: string;
				};
			};
		};
	};
}

interface ProductsPage {
	totalCount: number;
	pageInfo: {
		endCursor: string;
		startCursor: string;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
	};
	edges: {
		node: Product;
	}[];
}
