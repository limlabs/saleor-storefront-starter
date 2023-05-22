"use client";

import { IProductVariantFragment } from "@/gql/sdk";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

export interface ProductSelectionContextData {
  quantity: number;
  variants: IProductVariantFragment[];
  selectedVariantID: string;
  updateQuantity: Dispatch<SetStateAction<number>>;
  updateSelectedVariant: Dispatch<SetStateAction<string>>;
}

const ProductSelectionContext = createContext<ProductSelectionContextData>({
  quantity: 1,
  selectedVariantID: "",
  variants: [],
  updateQuantity: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
  updateSelectedVariant: function (value: SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
});

interface ProductSelectionProviderProps {
  children: ReactNode;
  initialSelectedVariantID?: string | undefined;
  initialQuantity?: number;
  productVariants: IProductVariantFragment[] | undefined;
}

export const ProductSelectionProvider: FC<ProductSelectionProviderProps> = ({
  children,
  productVariants = [],
  initialSelectedVariantID = "",
  initialQuantity = 1,
}) => {
  const [quantity, updateQuantity] = useState(initialQuantity);
  const [selectedVariantID, updateSelectedVariant] = useState(
    initialSelectedVariantID
  );

  return (
    <ProductSelectionContext.Provider
      value={{
        quantity,
        updateQuantity,
        selectedVariantID,
        updateSelectedVariant,
        variants: productVariants,
      }}
    >
      {children}
    </ProductSelectionContext.Provider>
  );
};

export const useProductSelection = () => {
  const selectionCtx = useContext(ProductSelectionContext);
  const selectedVariant = useMemo(() => {
    return selectionCtx.variants.find(
      (variant) => variant.id === selectionCtx.selectedVariantID
    );
  }, [selectionCtx.selectedVariantID, selectionCtx.variants]);

  return {
    ...selectionCtx,
    selectedVariant,
  };
};
