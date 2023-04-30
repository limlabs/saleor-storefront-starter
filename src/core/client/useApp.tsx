"use client";

import { createContext, useContext, useMemo } from "react";
import type { FC, PropsWithChildren } from "react";

const LANG_CODE = [
  "en",    // English
  "en-us", // US-English
  "es-mx", // Spanish-Mexico
  "fr-fr", // French-France
  "it-it", // Italian-Italy
  //...
];

interface AppProviderStore {
  params: {
    locale?: string;
  };
}

interface AppProvider {
  value: AppProviderStore;
}

const INIT: AppProviderStore = { params: {} };
const AppContext = createContext<AppProviderStore>(INIT);

export const AppProvider: FC<PropsWithChildren<AppProvider>> = ({
  children,
  value,
}) => {
  const normalized = useMemo<AppProviderStore>(() => {
    const { params } = value;
    const locale = LANG_CODE.includes(params.locale ?? "")
      ? params.locale
      : "en-us";

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
