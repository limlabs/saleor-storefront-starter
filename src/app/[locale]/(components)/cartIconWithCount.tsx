import { getCheckoutID } from "@/core/server/checkout";
import { gqlClient } from "@/gql";
import { Suspense } from "react";
import { CartIcon } from "./cartIcon";
import { getTranslations } from "@/core/server/getTranslations";

async function AsyncCartIcon({
  promise,
}: {
  promise: Promise<number | undefined>;
}) {
  const [t,quantity] = await Promise.all([getTranslations(), promise]);

  const a11y = {cartIcon: t("header.a11y.cartIcon")}
  return <CartIcon quantity={quantity} a11y={a11y}/>;
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
