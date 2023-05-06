"use client";
import { ChangeEventHandler } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/core/client/useApp";
import Select from "@/app/daisyui/select";
import type { FC } from "react";

export const LocaleMenu: FC = () => {
  const { params, i18n } = useApp();
  const router = useRouter();

  const handleLocaleChange: ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => {
    const { pathname } = window.location;
    if (params.locale) {
      const localePathname = pathname.replace(params.locale, target.value);
      router.replace(localePathname);
    }
  };

  return (
    <Select
      className="select-primary select-sm"
      defaultValue={params.locale}
      onChange={handleLocaleChange}
    >
      {Object.entries(i18n.locales).map(([locale, label]) => (
        <option key={locale} value={locale}>
          {label}
        </option>
      ))}
    </Select>
  );
};
