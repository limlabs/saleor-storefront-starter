'use server';

import { gqlClient } from '@/gql';
import { ICheckoutCreate, ICheckoutLinesAdd } from '@/gql/sdk';

export const checkoutLinesAdd = async (
  variantID: string,
  checkoutID: string,
  quantity: number
): Promise<ICheckoutLinesAdd['checkout']> => {
  const resp = await gqlClient.checkoutLinesAdd({
    variantID,
    checkoutID,
    quantity,
  });
  // TODO: handle TS errors
  return resp?.checkoutLinesAdd?.checkout;
};

export const checkoutCreate = async (
  variantID: string,
  quantity: number
): Promise<ICheckoutCreate['checkout']> => {
  const resp = await gqlClient.checkoutCreate({ variantID, quantity });
  // TODO: handle TS errors
  return resp?.checkoutCreate?.checkout;
};
