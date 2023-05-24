export const addToCartTranslationKeys = [
  "add to cart",
  "add to cart confirmation",
  "checkout",
  "continue shopping",
] as const;

export type AddToCartTranslations = (typeof addToCartTranslationKeys)[number];
