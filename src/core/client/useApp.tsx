"use client";

import { createContext, useContext, useMemo } from "react";
import type { FC, PropsWithChildren } from "react";
import type { I18NConf, Locale } from "@/i18n-config";
import type { ChannelConf, Channel } from "@/channel-config";

interface AppProviderStore {
  i18n: I18NConf;
  channels: ChannelConf;
  params: {
    locale?: Locale;
    channel?: Channel;
  };
}

interface AppProvider {
  value: AppProviderStore;
}

const AppContext = createContext<AppProviderStore>({
  params: {},
  i18n: {} as I18NConf,
  channels: {} as ChannelConf,
});

export const AppProvider: FC<PropsWithChildren<AppProvider>> = ({
  children,
  value,
}) => {
  const normalized = useMemo<AppProviderStore>(() => {
    const { params, i18n, channels } = value;
    const locale =
      (params.locale as Locale) in i18n.locales
        ? params.locale
        : i18n.defaultLocale;

    const channel = channels.list.includes(params.channel as Channel)
      ? params.channel
      : channels.defaultChannel;

    return {
      ...value,
      params: {
        ...params,
        channel,
        locale,
      },
    };
  }, [value]);

  return (
    <AppContext.Provider value={normalized}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
