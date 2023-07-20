import Button from "@/app/daisyui/button";
import { TextField } from "../(components)/textField";

import { useTranslations } from "@/core/server/useTranslations";
import RequiredLabel from "../(components)/requiredLabel";

export const CreateAccount = () => {
  const t = useTranslations();

  return (
    <div className=" flex-col justify-start items-start gap-6 inline-flex">
      <h1 className="text-base-10 text-4xl font-bold ">
        {t("login.create account")}
      </h1>
      <p className=" h-5 text-base-10 text-base font-semibold">
        {t("login.sign up message")}
      </p>
      <form className="flex-col justify-start items-start gap-10 inline-flex mt-10 w-full">
        <TextField
          label={t("login.first name")}
          id="firstName"
          className="flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          label={t("login.last name")}
          id="lastName"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          id="registerEmail"
          label={<RequiredLabel label={t("login.email")} />}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          label={<RequiredLabel label={t("login.password")} />}
          id="registerPassword"
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          label={<RequiredLabel label={t("login.confirm password")} />}
          id="confirmPassword"
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <div className="w-full">
          <Button variant="secondary">{t("login.register")}</Button>
        </div>
      </form>
    </div>
  );
};
