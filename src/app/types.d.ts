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
    edges: {
        node: Product;
    }[];
}