"use client";
import Button from "@/app/daisyui/button";
import { useState } from "react";
import { TextField } from "../(components)/textField";
import { getTranslations } from "@/core/server/getTranslations";

import { useTranslations } from "@/core/server/useTranslations";

export const CreateAccount = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const t = useTranslations();

  return (
    <div className=" w-1/2 p-10 bg-base-300 flex-col justify-start items-start gap-2.5 inline-flex">
      <h1 className="text-base-10 text-4xl font-bold ">
        {t("auth.create account")}
      </h1>
      <p className=" h-5 text-base-10 text-base font-semibold">
        {t("auth.sign up message")}
      </p>
      <form className="flex-col justify-start items-start gap-10 inline-flex mt-10 w-full">
        <TextField
          value={firstName}
          label={t("auth.first name")}
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          value={lastName}
          label={t("auth.last name")}
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          value={email}
          id="registerEmail"
          label={t("auth.email")}
          onChange={(e) => setEmail(e.target.value)}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          value={password}
          label={t("auth.password")}
          id="registerPassword"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          value={confirmPassword}
          label={t("auth.confirm password")}
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <div className="w-full">
          <Button variant="neutral">{t("auth.register")}</Button>
        </div>
      </form>
    </div>
  );
};
