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

export interface ProductCardContextData {
  productQuantity: number;
  updateProductQuantity: Dispatch<SetStateAction<number>>;
}

const ProductCardContext = createContext<ProductCardContextData>({
  productQuantity: 1,
  updateProductQuantity() {},
});

export const ProductCardProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [productQuantity, updateProductQuantity] = useState(1);
  return (
    <ProductCardContext.Provider
      value={{ productQuantity, updateProductQuantity }}
    >
      {children}
    </ProductCardContext.Provider>
  );
};

export const useProductCard = () => {
  return useContext(ProductCardContext);
};
