"use client";

import { Locale } from "@/locale-config";
import { ReactNode } from "react";
import { useOrderSummary } from "../(checkout)/checkout/_components/orderSummaryProvider";

interface OrderSummaryProps {
  locale?: Locale;
  includeShipping?: boolean;
  includeDiscount?: boolean;
  actions?: ReactNode;
}

export const OrderSummary = ({
  includeShipping = false,
  includeDiscount = false,
  actions,
}: OrderSummaryProps) => {
  const { subtotal, shippingAmount, discountAmount, total } = useOrderSummary();

  return (
    <div className="w-full flex flex-col items-end">
      <div className="p-4 w-full lg:max-w-sm rounded-md bg-neutral h-auto inline-flex flex-wrap justify-center items-center mt-12 md:pt-2 md:pb-2 md:pr-2 md:pl-2 md:mt-0">
        <div className="text-center font-roboto md:p-4">
          <h2 className="text-lg text-left font-bold">Order Summary</h2>
          <div className="flex justify-between pt-4">
            <p className="text-left">Original Price:</p>
            <p className="text-right pl-20">${subtotal.toFixed(2)}</p>
          </div>

          {includeDiscount && (
            <div className="flex justify-between text-accent">
              <p className="text-left">Discounts:</p>
              <p className="text-right pl-20">
                ${discountAmount ? `$${discountAmount}` : "--"}
              </p>
            </div>
          )}

          {includeShipping && (
            <div className="flex justify-between">
              <p className="text-left">Shipping:</p>
              <p className="text-right pl-20">
                {shippingAmount ? `$${shippingAmount}` : "--"}
              </p>
            </div>
          )}
          {!includeShipping && (
            <div className="flex justify-between">
              <p className="text-left">Shipping:</p>

              <p className="text-right pl-20">Calculated at checkout</p>
            </div>
          )}

          <div className="flex flex-col pt-3">
            <div className="flex justify-between">
              <p className="text-left font-bold">Total:</p>
              <p className="text-right font-bold pl-20">${total.toFixed(2)}</p>
            </div>

            {actions && <div className="mt-4 text-center">{actions}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
