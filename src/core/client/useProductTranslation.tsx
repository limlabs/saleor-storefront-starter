import { useMemo } from "react";

type Translatable = Pick<
  Product,
  "name" | "description" | "translation" | "category" | "variants"
>;

export function useProductTranslation(product: Translatable) {
  return useMemo(() => {
    const { name, description, translation, category, variants } = product;
    return Object.assign({}, translation ?? { name, description }, {
      category: category.translation ?? category,
    }, {variants: variants.map((v)=>v.translation ?? v)});
  }, [product]);
}
