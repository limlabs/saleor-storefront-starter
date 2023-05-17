import { IGalleryProductFragment, IProduct } from "@/gql/sdk";
import { useMemo } from "react";

type Translatable = Pick<
  IGalleryProductFragment,
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


export type ProductTranslation = ReturnType<typeof useProductTranslation>;