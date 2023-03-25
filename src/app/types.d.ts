interface ProductImage {
    url: string;
    alt: string;
}

interface Product {
    slug: string;
    name: string;
    media: ProductImage[];
    thumbnail: ProductImage;
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
}