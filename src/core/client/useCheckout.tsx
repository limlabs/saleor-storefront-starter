'use client';

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { checkoutStorageKey } from '@/core/constants';
import { gqlClient } from '@/gql';
import {
  ICheckout,
  ICheckoutCreate,
  ICheckoutLinesAdd,
  Maybe,
} from '@/gql/sdk';

import { checkoutLinesAdd, checkoutCreate } from '../server/checkoutFunctions';

export interface CheckoutContextData {
  checkoutQuantity: number | undefined;
  addItem(
    variantID: string,
    quantity: number
  ): Promise<Maybe<ICheckout> | undefined>;
}

const CheckoutContext = createContext<CheckoutContextData>({
  checkoutQuantity: 0,
  async addItem() {
    return undefined;
  },
});

const getCookie = (name: string) => {
  const cookieInitial = name + '=';
  const cookieSearch = document.cookie
    .split('; ')
    .filter(
      (cookie) => cookie.substring(0, cookieInitial.length) === cookieInitial
    );
  if (cookieSearch.length === 0) return '';
  else
    return cookieSearch[0].substring(
      cookieInitial.length,
      cookieSearch[0].length
    );
};

export const CheckoutProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [checkoutQuantity, updateCheckoutQuantity] = useState<
    number | undefined
  >();
  const addItem = useCallback(async (variantID: string, quantity = 1) => {
    const checkoutID = getCookie('CheckoutID');
    ('use server');

    let checkout: Maybe<ICheckout> | null | undefined;

    if (checkoutID) {
      checkout = await checkoutLinesAdd(variantID, checkoutID, quantity);
      if (checkout) {
        updateCheckoutQuantity(checkout.quantity);
        console.log(`New item added to checkout ${checkout.lines[0].id}.`);
      }
    } else {
      checkout = await checkoutCreate(variantID, quantity);
      if (checkout) {
        document.cookie = [
          `${checkoutStorageKey}=${checkout.id}`,
          'path=/',
          `expires=Fri, 31 Dec 9999 23:59:59 GMT`,
        ].join('; ');
        updateCheckoutQuantity(checkout.quantity);
        console.log(`New checkout created with ID ${checkout.id}`);
      }
    }

    return checkout;
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        checkoutQuantity,
        addItem,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  return useContext(CheckoutContext);
};
