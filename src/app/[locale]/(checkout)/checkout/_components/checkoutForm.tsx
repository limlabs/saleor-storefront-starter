// Copied from https://stripe.com/docs/payments/quickstart
/* eslint-disable */
// @ts-nocheck
import { use, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "@/app/daisyui/button";
import { AddressFormFields } from "./addressFormFields";
import clsx from "clsx";
import AddressCard, { AddressCardAddress } from "./addressCard";
import { OrderSummary } from "@/app/[locale]/(components)/OrderSummary";

export default function CheckoutForm({
  returnUrl,
  shippingAddress,
}: {
  returnUrl: string;
  shippingAddress: AddressCardAddress;
}) {
  const [useShippingAddress, setUseShippingAddress] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const handleUseShippingAddressChange = (value: boolean) => {
    setUseShippingAddress(value);
  };

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: returnUrl,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1">
        <div className="stripe w-full px-4 sm:px-0">
          <h1 className="text-2xl font-bold mb-4">Payment Info</h1>
          <div
            className="payment-form flex flex-col gap-12"
            onSubmit={handleSubmit}
          >
            <PaymentElement
              className="payment-element"
              options={paymentElementOptions}
            />

            <fieldset className="form-control">
              <h2 className="w-full text-left text-xl lg:text-2xl font-bold mb-6">
                Billing Address
              </h2>
              <label
                className="label pl-0 cursor-pointer"
                htmlFor="useShippingAddress_true"
              >
                <span className="label-text text-lg">
                  Same as Shipping Address
                </span>
                <input
                  type="checkbox"
                  className={clsx(
                    "checkbox",
                    useShippingAddress && "checkbox-primary"
                  )}
                  name="useShippingAddress"
                  id="useShippingAddress_true"
                  checked={useShippingAddress && "checked"}
                  onChange={() => handleUseShippingAddressChange(true)}
                />
              </label>
              {useShippingAddress && <AddressCard address={shippingAddress} />}
              <label
                className="label pl-0 cursor-pointer"
                htmlFor="useShippingAddress_false"
              >
                <span className="label-text text-lg">New Address</span>
                <input
                  type="checkbox"
                  checked={!useShippingAddress && "checked"}
                  className={clsx(
                    "checkbox",
                    !useShippingAddress && "checkbox-primary"
                  )}
                  id="useShippingAddress_false"
                  onChange={() => handleUseShippingAddressChange(false)}
                />
              </label>
            </fieldset>

            {!useShippingAddress && <AddressFormFields />}

            {/* Show any error or success messages */}
            {message && <div className="payment-message">{message}</div>}
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <OrderSummary
          includeShipping
          actions={
            <Button
              variant="primary"
              disabled={isLoading || !stripe || !elements}
              id="submit"
            >
              <span className="button-text">
                {isLoading ? "Submitting Payment" : "Pay now"}
              </span>
            </Button>
          }
        />
      </div>
    </form>
  );
}
