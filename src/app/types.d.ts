interface ProductImage {
	url: string;
	alt: string;
}

interface Product {
	slug: string;
	name: string;
	media: ProductImage[];
	thumbnail: ProductImage;
	isAvailable: boolean;
	defaultVariant: {
		id: string;
	}
	rating: number;
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

interface Page<T> {
	pageInfo: {
		endCursor: string;
		startCursor: string;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
	};
	edges: {
		node: T;
	}[];
}
