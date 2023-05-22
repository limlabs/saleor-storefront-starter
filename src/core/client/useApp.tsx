"use client";

import { createContext, useContext, useMemo } from "react";
import type { FC, PropsWithChildren } from "react";
import type { LocaleConfig, Locale } from "@/locale-config";
import type { ChannelConfig, Channel } from "@/channel-config";

interface AppProviderStore {
  localeConfig: LocaleConfig;
  channelConfig: ChannelConfig;
  params: {
    locale: Locale;
    channel: Channel;
  };
}

interface AppProvider {
  value: AppProviderStore;
}

const AppContext = createContext<AppProviderStore>({
  params: {
    locale: "en-us",
    channel: "default-channel",
  },
  localeConfig: {} as LocaleConfig,
  channelConfig: {} as ChannelConfig,
});

export const AppProvider: FC<PropsWithChildren<AppProvider>> = ({
  children,
  value,
}) => {
  const normalized = useMemo<AppProviderStore>(() => {
    const { params, localeConfig, channelConfig } = value;
    const locale =
      (params.locale as Locale) in localeConfig.locales
        ? params.locale
        : localeConfig.defaultLocale;

    const channel = channelConfig.list.includes(params.channel as Channel)
      ? params.channel
      : channelConfig.defaultChannel;

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
