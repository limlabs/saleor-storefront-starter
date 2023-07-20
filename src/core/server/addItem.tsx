'use server';

import { gqlClient } from '@/gql';
import {
  ICheckout,
  ICheckoutCreate,
  ICheckoutLinesAdd,
  Maybe,
} from '@/gql/sdk';
import { checkoutStorageKey } from '../constants';

export async function addItem(
  variantID: string,
  quantity = 1,
  checkoutID?: string
) {
  'use server';

  let checkout: Maybe<ICheckout> | null | undefined;
  if (checkoutID) {
    const resp = await gqlClient.checkoutLinesAdd({
      variantID,
      checkoutID,
      quantity,
    });
    checkout = resp?.checkoutLinesAdd?.checkout as Maybe<
      ICheckoutLinesAdd['checkout']
    >;
  } else {
    const resp = await gqlClient.checkoutCreate({
      variantID,
      quantity,
    });

    checkout = resp?.checkoutCreate?.checkout as Maybe<
      ICheckoutCreate['checkout']
    >;
    if (checkout) {
      document.cookie = [
        `${checkoutStorageKey}=${checkout.id}`,
        'path=/',
        `expires=Fri, 31 Dec 9999 23:59:59 GMT`,
      ].join('; ');
    }
  }
  return checkout;
}
