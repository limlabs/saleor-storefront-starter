"use client";
import { ChangeEventHandler } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/core/client/useApp";
import Select from "@/app/daisyui/select";
import type { FC } from "react";

export const LocaleMenu: FC = () => {
  const { params, localeConfig } = useApp();
  const router = useRouter();

  const handleLocaleChange: ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => {
    const { pathname, search } = window.location;
    if (params.locale) {
      const localePathname = pathname.replace(params.locale, target.value);
      router.replace(localePathname + search);
    }
  };

  return (
    <Select
      aria-label="language selector"
      className="select-primary select-md"
      defaultValue={params.locale}
      onChange={handleLocaleChange}
    >
      {localeConfig?.locales
        ? Object.entries(localeConfig.locales).map(([locale, label]) => (
            <option key={locale} value={locale}>
              {label}
            </option>
          ))
        : null}
    </Select>
  );
};
