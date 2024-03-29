"use client";

import Button from "@/app/daisyui/button";
import { TextField } from "../(components)/textField";
import { useTranslations } from "@/core/server/useTranslations";
import Link from "next/link";
import { useState } from "react";
import { loginSubmit } from "../(components)/serverSubmitHandlers";
import { useRouter } from "next/navigation";
import RequiredLabel from "../(components)/requiredLabel";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const t = useTranslations();
  const router = useRouter();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const respPromise = loginSubmit(formData);

    respPromise.then((resp) => {
      if (resp.tokenCreate?.errors.length !== 0) {
        setLoginError(t("login.login error"));
      }
      if (resp.tokenCreate?.token) {
        router.push("/home");
      }
    });
  };

  return (
    <div className="flex flex-col justify-start items-start w-full gap-6">
      <h1 className="text-base-10 text-4xl font-bold ">{t("login.log in")}</h1>
      <form
        className="flex flex-col justify-start items-start gap-8 w-full"
        action={handleSubmit}
      >
        <TextField
          id="loginEmail"
          name="email"
          label={t("login.email")}
          className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label={t("login.password")}
          id="loginPassword"
          name="password"
          type="password"
          className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary"> {t("login.log in")}</Button>
        <p>{loginError}</p>
      </form>
      <Link href={"forgot-password"} className="underline block">
        {t("login.forgot password")}
      </Link>
    </div>
  );
}
