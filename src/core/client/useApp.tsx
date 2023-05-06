"use client";

import { createContext, useContext, useMemo } from "react";
import type { FC, PropsWithChildren } from "react";
import type { I18NConf } from "@/i18n-config";

interface AppProviderStore {
  i18n: I18NConf;
  params: {
    locale?: string;
  };
}

interface AppProvider {
  value: AppProviderStore;
}

const AppContext = createContext<AppProviderStore>({
  params: {},
  i18n: {} as any,
});

export const AppProvider: FC<PropsWithChildren<AppProvider>> = ({
  children,
  value,
}) => {
  const normalized = useMemo<AppProviderStore>(() => {
    const { params, i18n } = value;
    const locale =
      (params.locale ?? "") in i18n.locales
        ? params.locale
        : i18n.defaultLocale;

    return {
      ...value,
      params: {
        ...params,
        locale,
      },
    };
  }, [value]);

  return (
    <AppContext.Provider value={normalized}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
