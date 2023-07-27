"use server";

import { gqlClient } from "@/gql";
import { cookies } from "next/headers";

export const loginSubmit = async (data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const twentyFourHoursInSeconds = 24 * 60 * 60;
  const resp = await gqlClient.tokenCreate({
    email: email,
    password: password,
  });
  // @ts-ignore
  cookies().set({
    name: "session",
    value: resp.tokenCreate?.token,
    httpOnly: true,
    path: "/",
    expires: new Date(Date.now() + twentyFourHoursInSeconds * 1000),
  });

  console.log("response", resp);
  return resp;
};