"use server";

import { gqlClient } from "@/gql";

export const loginSubmit = async (data: FormData) => {
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  console.log(email, password);
  const resp = await gqlClient.tokenCreate({
    email: email,
    password: password,
  });
  console.log("response", resp);
  console.log("click");
  return resp;
};
