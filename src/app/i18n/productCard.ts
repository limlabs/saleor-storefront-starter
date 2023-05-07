
export const productCardI18NKeys = [
    "add to cart",
    "sale"
] as const;

export type ProductCardI18N = typeof productCardI18NKeys[number];