'use server';

import { gqlClient } from '@/gql';

export const checkoutLinesAdd = async (
  variantID: string,
  checkoutID: string,
  quantity: number
) => {
  const resp = await gqlClient.checkoutLinesAdd({
    variantID,
    checkoutID,
    quantity,
  });
  return resp?.checkoutLinesAdd?.checkout;
};

export const checkoutCreate = async (variantID: string, quantity: number) => {
  const resp = await gqlClient.checkoutCreate({ variantID, quantity });
  return resp?.checkoutCreate?.checkout;
};
