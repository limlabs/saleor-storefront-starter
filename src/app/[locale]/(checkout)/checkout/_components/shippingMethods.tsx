"use client";

import { ICheckoutDeliveryInfoQuery } from "@/gql/sdk";
import { useOrderSummary } from "./orderSummaryProvider";

interface ShippingMethodsProps {
  shippingMethods: NonNullable<
    ICheckoutDeliveryInfoQuery["checkout"]
  >["shippingMethods"];
}

export const ShippingMethods = ({ shippingMethods }: ShippingMethodsProps) => {
  const { setShippingAmount } = useOrderSummary();

  return (
    <fieldset className="flex flex-col items-center justify-center w-full gap-4">
      <h2 className="w-full text-left text-xl lg:text-2xl">Shipping Method</h2>
      <div className="flex flex-col items-start justify-start w-full">
        {shippingMethods.map((shippingMethod) => (
          <label
            className="flex items-center justify-start gap-2"
            key={shippingMethod.id}
          >
            <input
              type="radio"
              name="shippingMethodId"
              value={shippingMethod.id}
              className="w-5 h-5"
              defaultValue={shippingMethod.id}
              onClick={() => {
                setShippingAmount(shippingMethod.price.amount);
              }}
              required
            />
            <span className="text-lg">
              {shippingMethod.name} - ${shippingMethod.price.amount.toFixed(2)}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};
