"use client";

import { IOrderSummaryFragment } from "@/gql/sdk";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface OrderSummaryContextType {
  subtotal: number;
  shippingAmount?: number;
  discountAmount?: number;
  total: number;
  setSubtotal: (subtotal: number) => void;
  setShippingAmount: (shippingAmount: number) => void;
  setDiscountAmount: (discountAmount: number) => void;
}

const OrderSummaryContext = createContext<OrderSummaryContextType>({
  subtotal: 0,
  total: 0,
  setSubtotal: () => {},
  setShippingAmount: () => {},
  setDiscountAmount: () => {},
});

export const OrderSummaryProvider = ({
  initialOrderSummary,
  children,
}: PropsWithChildren<{
  initialOrderSummary: IOrderSummaryFragment;
}>) => {
  const [subtotal, setSubtotal] = useState(
    initialOrderSummary.subtotalPrice.net.amount
  );
  const [shippingAmount, setShippingAmount] = useState(
    initialOrderSummary.shippingPrice.net.amount
  );
  const [discountAmount, setDiscountAmount] = useState(
    initialOrderSummary.discount?.amount
  );

  const total = subtotal + shippingAmount;

  return (
    <OrderSummaryContext.Provider
      value={{
        subtotal,
        setSubtotal,
        shippingAmount,
        setShippingAmount,
        discountAmount,
        setDiscountAmount,
        total,
      }}
    >
      {children}
    </OrderSummaryContext.Provider>
  );
};

export const useOrderSummary = () => {
  return useContext(OrderSummaryContext);
};
