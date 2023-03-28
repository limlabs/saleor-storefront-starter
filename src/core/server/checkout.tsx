import { cookies } from 'next/headers';
import { checkoutStorageKey } from '../constants';

export const getCheckoutID = (): string => {
	const cookieStore = cookies();
	const cookie = cookieStore.get(checkoutStorageKey);
	return cookie?.value ?? '';
};
