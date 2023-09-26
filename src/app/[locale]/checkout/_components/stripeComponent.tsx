"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useMemo } from "react";
import CheckoutForm from "./checkoutForm";
import { AddressCardAddress } from "./addressCard";

export const StripeComponent = ({
  clientSecret,
  publishableKey,
  returnUrl,
  shippingAddress,
}: {
  clientSecret: string;
  publishableKey: string;
  returnUrl: string;
  shippingAddress: AddressCardAddress;
}) => {
  const stripePromise = useMemo(
    () => loadStripe(publishableKey),
    [publishableKey]
  );

  return (
    <Elements
      options={{ clientSecret, appearance: { theme: "stripe" } }}
      stripe={stripePromise}
    >
      <CheckoutForm returnUrl={returnUrl} shippingAddress={shippingAddress} />
    </Elements>
  );
};
