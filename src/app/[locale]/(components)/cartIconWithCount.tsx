import { getCheckoutID } from "@/core/server/checkout";
import { gqlClient } from "@/gql";
import { Suspense } from "react";
import { CartIcon } from "./cartIcon";

async function AsyncCartIcon({ promise }: { promise: Promise<number> }) {
  const quantity = await promise;
  return <CartIcon quantity={quantity} />;
}

export function CartIconWithCount() {
  const checkoutID = getCheckoutID();
  let getQuantity = Promise.resolve(0);

  if (checkoutID) {
    getQuantity = gqlClient
      .CheckoutQuantity({
        id: checkoutID,
      })
      .then((resp) => {
        return resp?.checkout?.quantity ?? 0;
      });
  }

  return (
    <Suspense fallback={<CartIcon />}>
      <AsyncCartIcon promise={getQuantity} />
    </Suspense>
  );
}
