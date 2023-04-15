import { Dispatch, SetStateAction } from 'react';

interface Money {
	amount: number;
}

interface TaxedMoney {
	currency: string;
	gross: Money;
	net: Money;
	tax: Money;
}

interface Category {
	id
	name
}
interface Variant {
	id: string;
	name: string;
}

interface Product {
	id: string;
	slug: string;	
	name: string;
	media: ProductImage[];
	thumbnail: ProductImage;
	rating: number;
	isAvailable: boolean;
	category: Category;
	defaultVariant: {
		id: string;
	};
	variants: Variant[];
	pricing: {
		onSale: boolean;
		discount: TaxedMoney | null;
		displayGrossPrices: boolean;
		priceRange: {
			start: TaxedMoney;
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
