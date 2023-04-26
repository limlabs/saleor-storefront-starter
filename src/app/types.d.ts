type JSONString = string;
type ProductMediaType = "IMAGE" | "VIDEO";

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

interface Image {
  url: string;
  alt: string;
}

interface ProductMedia {
  url: string;
  alt: string;
  type: ProductMediaType
}

interface ProductVariant {
  name: string;
  weight: Weight;
  media: ProductMedia[];
}

interface Product {
  id: string;
  slug: string;
  name: string;
  translation: ProductTranslation | null;
  thumbnail: Image;
  rating: number;
  category: Category;
  defaultVariant: {
    id: string;
  };
  variants: ProductVariant[];
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

interface ProductDetails {
  id: string;
  seoTitle: string;
  name: string;
  description: string;
  slug: string;
  rating: number;

  translation: ProductTranslation | null;
  
  thumbnail: Image;
  
  productType: ProductType;

  weight: Weight;

  media: ProductMedia[];
  
  isAvailable: boolean;
  defaultVariant: {
    id: string;
  };

  pricing: Pricing;
  variants: ProductVariant[];
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
