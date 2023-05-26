export const productDetailsTranslationKeys = ["rating"] as const;

export type ProductDetailsTranslations =
  (typeof productDetailsTranslationKeys)[number];
