import { getCheckoutID } from "@/core/server/checkout";
import { gqlClient } from "@/gql";
import { Suspense } from "react";
import { CartIcon } from "./cartIcon";

async function AsyncCartIcon({
  promise,
}: {
  promise: Promise<number | undefined>;
}) {
  const quantity = await promise;
  return <CartIcon quantity={quantity} />;
}

export function CartIconWithCount() {
  const checkoutID = getCheckoutID();
  let getQuantity = Promise.resolve<number | undefined>(undefined);

  if (checkoutID) {
    getQuantity = gqlClient
      .CheckoutQuantity({
        id: checkoutID,
      })
      .then((resp) => {
        return resp?.checkout?.quantity;
      });
  }

  return (
    <Suspense fallback={<CartIcon />}>
      {/* @ts-expect-error */}
      <AsyncCartIcon promise={getQuantity} />
    </Suspense>
  );
}
