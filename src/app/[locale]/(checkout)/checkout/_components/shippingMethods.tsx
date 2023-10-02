"use client";

import { ICheckoutDeliveryInfoQuery } from "@/gql/sdk";
import { useOrderSummary } from "./orderSummaryProvider";
import clsx from "clsx";

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
      <div className="flex flex-col items-start justify-start w-full gap-4">
        {shippingMethods.map((shippingMethod) => (
          <label
            className={clsx(
              "flex items-center justify-start gap-2 ring-neutral cursor-pointer ring-inset ring-1 rounded-md p-4 w-full"
            )}
            key={shippingMethod.id}
            htmlFor={`shippingMethodOption_${shippingMethod.id}`}
          >
            <input
              id={`shippingMethodOption_${shippingMethod.id}`}
              type="radio"
              name="shippingMethodId"
              value={shippingMethod.id}
              className="checkbox checked:checkbox-secondary"
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
