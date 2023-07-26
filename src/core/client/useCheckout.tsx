'use client';

import {
  createContext,
  FC,
  ReactNode,
  useTransition,
  useCallback,
  useContext,
  useState,
} from 'react';

import { checkoutStorageKey } from '@/core/constants';
import { ICheckout, Maybe } from '@/gql/sdk';

import { checkoutLinesAdd, checkoutCreate } from '../server/checkoutFunctions';
import { revalidateTag } from 'next/cache';
import { useRouter } from 'next/navigation';

export interface CheckoutContextData {
  checkoutQuantity: number | undefined;
  addItem(variantID: string, quantity: number): Promise<unknown | undefined>;
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
  let router = useRouter();
  const [isPending, startTransition] = useTransition();
  const addItem = useCallback(async (variantID: string, quantity = 1) => {
    ('use server');
    const checkoutID = getCookie('CheckoutID');
    let checkout;

    if (checkoutID) {
      checkout = await checkoutLinesAdd(variantID, checkoutID, quantity);
      if (checkout) {
        updateCheckoutQuantity(checkout.quantity);
        console.log(`New item added to checkout ${checkout.lines[0].id}.`);

        startTransition(() => {
          router.refresh();
        });
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

        startTransition(() => {
          router.refresh();
        });
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
