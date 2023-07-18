"use client";
import Button from "@/app/daisyui/button";
import TextInput from "@/app/daisyui/text-input";
import { FormEvent, useState } from "react";
import { TextField } from "../(components)/textField";
import { useTranslations } from "@/core/server/useTranslations";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const t = useTranslations();

  return (
    <div className="w-1/2  p-10 flex-col justify-start items-start gap-6 inline-flex">
      <h1 className="text-stone-300 text-4xl font-bold uppercase">login</h1>
      <form className="flex-col justify-start items-start gap-10 inline-flex mt-10 w-full">
        <TextField
          value={email}
          id="loginEmail"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 bg-stone-950 border border-neutral-800 justify-start items-start gap-6 inline-flex w-full"
        />
        <TextField
          value={password}
          label="Password*"
          id="loginPassword"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="p-3 bg-stone-950 border border-neutral-800 justify-start items-start gap-6 inline-flex w-full"
        />

        <Button variant="primary"> {t("auth.log in")}</Button>
      </form>

      <h2>{t("auth.forgot password")}</h2>
    </div>
  );
};
