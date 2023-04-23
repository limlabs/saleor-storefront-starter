type JSONString = string;

interface EditorJSBlock {
  id: string;
  data: {
    text: string;
  }
  type: "paragraph"
}

interface EditorJSObject {
  time: number;
  blocks: EditorJSBlock[];
}

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
  id;
  name;
}
interface Variant {
  id: string;
  name: string;
}

interface Pricing {
  onSale: boolean;
  discount: TaxedMoney | null;
  displayGrossPrices: boolean;
  priceRange: {
    start: TaxedMoney;
  };
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
  pricing: Pricing;
}

interface ProductTranslation {
  name: string;
  description: string;
}

interface ProductType {
  name: string;
  slug: string;
}

interface Weight {
  unit: string;
  value: number;
}
// type ProductDetails = TranslatableDetails & {
//   slug: string;
//   media: ProductImage[];
//   translation?: TranslatableDetails;
//   thumbnail: ProductImage;
//   isAvailable: boolean;
//   defaultVariant: {
//     id: string;
//   };
//   rating: number;
//   pricing: Pricing;
// }

interface ProductDetails {
  id: string;
  seoTitle: string;
  name: string;
  description: string;
  slug: string;

  translation: ProductTranslation | null;
  
  thumbnail: ProductImage;
  
  productType: ProductType;

  weight: Weight;

  media: ProductImage[];
  
  isAvailable: boolean;
  defaultVariant: {
    id: string;
  };
  rating: number;
  pricing: Pricing;
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
