import { useMemo } from "react";

type Translatable = Pick<
  Product,
  "name" | "description" | "translation" | "category"
>;

export function useProductTranslation(product: Translatable) {
  return useMemo(() => {
    const { name, description, translation, category } = product;
    return Object.assign({}, translation ?? { name, description }, {
      category: category.translation ?? category,
    });
  }, [product]);
}
