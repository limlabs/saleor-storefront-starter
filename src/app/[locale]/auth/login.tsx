"use client";
import Button from "@/app/daisyui/button";
import { FormEvent, useState } from "react";
import { TextField } from "../(components)/textField";
import { useTranslations } from "@/core/server/useTranslations";
import Link from "next/link";
import { withTranslations } from "@/core/server/locale";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const t = useTranslations();

  return (
    <div className="w-1/2  p-10 flex-col justify-start items-start gap-6 inline-flex">
      <h1 className="text-base-10 text-4xl font-bold ">{t("auth.log in")}</h1>
      <form className="flex-col justify-start items-start gap-10 inline-flex mt-10 w-full">
        <TextField
          value={email}
          id="loginEmail"
          label={t("auth.email")}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-6 inline-flex w-full"
        />
        <TextField
          value={password}
          label={t("auth.password")}
          id="loginPassword"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-6 inline-flex w-full"
        />

        <Button variant="neutral"> {t("auth.log in")}</Button>
      </form>

      <Link href={"forgot-password"}>{t("auth.forgot password")}</Link>
    </div>
  );
}
