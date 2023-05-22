"use client";

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface ProductSelectionContextData {
  quantity: number;
  selectedVariantID: string;
  updateQuantity: Dispatch<SetStateAction<number>>;
  updateSelectedVariant: Dispatch<SetStateAction<string>>;
}

const ProductSelectionContext = createContext<ProductSelectionContextData>({
  quantity: 1,
  selectedVariantID: "",
  updateQuantity: function (value: SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
  updateSelectedVariant: function (value: SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
});

export const ProductSelectionProvider: FC<{
  children: ReactNode;
  initialSelectedVariantID?: string | undefined;
  initialQuantity?: number;
}> = ({ children, initialSelectedVariantID = "", initialQuantity = 1 }) => {
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
      }}
    >
      {children}
    </ProductSelectionContext.Provider>
  );
};

export const useProductSelection = () => {
  return useContext(ProductSelectionContext);
};
