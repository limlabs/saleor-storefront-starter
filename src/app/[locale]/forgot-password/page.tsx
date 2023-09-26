"use client";

import { Locale } from "@/locale-config";
import { Channel } from "@/channel-config";
import { useTranslations } from "@/core/server/useTranslations";
import { useState } from "react";
import { requestPasswordReset } from "../(components)/serverSubmitHandlers";
import RequiredLabel from "../(components)/requiredLabel";

import { TextField } from "../(components)/textField";
import Button from "@/app/daisyui/button";

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
  };
}

export default function RequestPasswordReset() {
  const [email, setEmail] = useState<string>("");
  const [dirty, setDirty] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const t = useTranslations();

  const handleEmailUpdated = (e: any) => {
    setDirty(true);
    setEmail(e.target.value);
  };

  let emailError = "";
  if (dirty && !email) {
    emailError = t("login.email needed");
  } else if (dirty && /\S+@\S+\.\S+/.test(email) === false) {
    emailError = t("login.email invalid");
  }

  const handleSubmit = () => {
    const formData = new FormData();
    const domain = window.location.origin;

    formData.append("email", email);
    const respPromise = requestPasswordReset(formData, domain);

    respPromise.then((resp) => {
      // TODO: handle errors

      setIsSubmitted(true);
    });
  };

  console.log("request password reset", t("login.request password reset")); // Check what this prints in the console
  console.log(t("login.password request email")); // Check what this prints in the console

  if (isSubmitted) {
    return (
      <div className="py-7 justify-start items-start gap-2.5 inline-flex">
        <div className="w-full md:w-1/2 p-10">
          <div className="flex flex-col justify-start items-start w-full gap-6">
            <h1 className="text-base-10 text-4xl font-bold">
              {t("login.check inbox")}
            </h1>
            <h3>{t("login.password reset email sent")}</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-7 justify-start items-start gap-2.5 inline-flex">
      <div className="w-full md:w-1/2 p-10">
        <div className="flex flex-col justify-start items-start w-full gap-6">
          <h1 className="text-base-10 text-4xl font-bold ">
            {t("login.request password reset")}
          </h1>
          <h3>{t("login.password request email")}</h3>

          {error && (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! {error}</span>
            </div>
          )}

          <form
            className="flex flex-col justify-start items-start gap-8 w-full"
            action={handleSubmit}
          >
            <TextField
              id="loginEmail"
              name="email"
              type="email"
              label={t("login.email")}
              className="p-3 bg-base-300 border border-neutral-800 justify-start items-start gap-3 inline-flex w-full"
              onChange={handleEmailUpdated}
              value={email}
            />
            <p>{emailError}</p>
            <Button
              type="submit"
              variant="primary"
              disabled={Boolean(emailError || !dirty)}
            >
              {t("login.submit")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
