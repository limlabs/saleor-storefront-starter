export const productCardTranslationKeys = ["sale"] as const;

export type ProductCardTranslations =
  (typeof productCardTranslationKeys)[number];
