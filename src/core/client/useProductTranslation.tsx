import { IGalleryProduct_PropsFragment, IProduct } from "@/gql/sdk";
import { useMemo } from "react";

type Translatable = Pick<
  IGalleryProduct_PropsFragment,
  "name" | "translation" | "category" | "variants"
> &
  Pick<IProduct, "description">;

export function useProductTranslation(product: Translatable) {
  return useMemo(() => {
    const { name, description, translation, category, variants } = product;
    return Object.assign(
      {},
      translation ?? { name, description },
      {
        category: category?.translation ?? category,
      },
      { variants: variants?.map((v) => v.translation ?? v) }
    );
  }, [product]);
}
