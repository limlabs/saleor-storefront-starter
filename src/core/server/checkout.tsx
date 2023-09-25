"use server";

import { cookies } from "next/headers";
import { checkoutStorageKey } from "../constants";

export const getCheckoutID = (): string => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(checkoutStorageKey);
  return cookie?.value ?? "";
};

import { gqlClient } from "@/gql";

export interface AddToCartResult {
  success: boolean;
  error?: string | null;
  checkoutID?: string;
}

export const checkoutLinesAdd = async (
  variantID: string,
  checkoutID: string,
  quantity: number
) => {
  const response = await gqlClient.checkoutLinesAdd({
    variantID,
    checkoutID,
    quantity,
  });

  if (!response.checkoutLinesAdd?.checkout) {
    return {
      success: false,
      error: `Checkout lines add failed, no response returned for variant ${variantID}, checkout ${checkoutID}, quantity ${quantity}`,
    };
  }

  return {
    success: true,
    checkoutID: response.checkoutLinesAdd.checkout.id,
  };
};

export const checkoutCreate = async (variantID: string, quantity: number) => {
  const response = await gqlClient.checkoutCreate({
    variantID,
    quantity,
  });

  if (!response.checkoutCreate?.checkout) {
    return {
      success: false,
      error: `Checkout create failed, no response returned for variant ${variantID}, quantity ${quantity}`,
    };
  } else if (response.checkoutCreate.errors?.length) {
    return {
      success: false,
      error: `Checkout create failed, errors: ${response.checkoutCreate.errors
        .map((err) => err.message)
        .join(", ")}`,
    };
  }

  return { success: true, checkoutID: response.checkoutCreate.checkout.id };
};

const logSuccess = (
  event: "created" | "updated",
  checkoutID: string,
  variantID: string,
  quantity: number
) => {
  console.log(
    `Checkout ${event} with id ${checkoutID}, variant ${variantID}, quantity ${quantity}.`
  );
};

const logError = (
  event: "created" | "updated",
  checkoutID: string,
  variantID: string,
  quantity: number,
  message: string
) => {
  console.log(
    `Checkout ${event} FAILED! id ${checkoutID}, variant ${variantID}, quantity ${quantity}.\n\nmessage ${message}`
  );
};

export const addCheckoutItem = async (
  variantID: string,
  quantity: number
): Promise<AddToCartResult> => {
  let operation: "created" | "updated" = "updated";
  let result: AddToCartResult;
  let checkoutID = getCheckoutID();

  console.log("checkoutID", checkoutID);

  if (!getCheckoutID()) {
    operation = "created";
    result = await checkoutCreate(variantID, quantity);
    checkoutID = result.checkoutID as string;
  } else {
    result = await checkoutLinesAdd(variantID, checkoutID, quantity);
  }

  if (!result.success) {
    logError(operation, checkoutID, variantID, quantity, result.error ?? "");
    return result;
  } else {
    cookies().set({
      name: checkoutStorageKey,
      value: checkoutID,
      path: "/",
      httpOnly: true,
    });
    logSuccess(operation, checkoutID, variantID, quantity);
  }

  return result;
};
