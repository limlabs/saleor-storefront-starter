
export const productCardTranslationKeys = [
    "add to cart",
    "sale"
] as const;

export type ProductCardTranslations = typeof productCardTranslationKeys[number];