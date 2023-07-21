"use client";
import Button from "@/app/daisyui/button";
import { TextField } from "../(components)/textField";
import { useTranslations } from "@/core/server/useTranslations";
import RequiredLabel from "../(components)/requiredLabel";
import { FormEvent, useState } from "react";
import { gqlClient } from "@/gql";

export const CreateAccount = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const t = useTranslations();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resp = await gqlClient.accountRegister({
        input: {
          email,
          password,
          firstName,
          lastName,
          channel: "default-channel",
          redirectUrl: `${process.env.BASE_URL}/en-us/account-confirm`,
        },
      });

      console.log("User registered:", resp);
    } catch (error: any) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className=" flex-col justify-start items-start gap-6 inline-flex">
      <h1 className="text-base-10 text-4xl font-bold ">
        {t("login.create account")}
      </h1>
      <p className=" h-5 text-base-10 text-base font-semibold">
        {t("login.sign up message")}
      </p>
      <form
        className="flex-col justify-start items-start gap-10 inline-flex mt-10 w-full"
        onSubmit={handleSubmit}
      >
        <TextField
          label={t("login.first name")}
          id="firstName"
          value={firstName}
          className="flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label={t("login.last name")}
          id="lastName"
          value={lastName}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="registerEmail"
          value={email}
          label={<RequiredLabel label={t("login.email")} />}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label={<RequiredLabel label={t("login.password")} />}
          id="registerPassword"
          value={password}
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label={<RequiredLabel label={t("login.confirm password")} />}
          id="confirmPassword"
          value={confirmPassword}
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="w-full">
          <Button variant="secondary">{t("login.register")}</Button>
        </div>
      </form>
    </div>
  );
};
