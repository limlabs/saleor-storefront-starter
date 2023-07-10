import { localeConfig } from "@/locale-config";
//TODO: Discuss how to list valid channels. Will place the config in src/channel-config.ts for now
import { Channel, channelConfig } from "@/channel-config";
import AppRoot from "./(components)/root";
import type { PropsWithChildren } from "react";
import type { Locale } from "@/locale-config";
import "./globals.css";
import { gqlClient } from "@/gql";
import { getLanguageCode } from "@/core/server/locale";
import { AppProvider } from "@/core/client/useApp";
import { CheckoutProvider } from "@/core/client/useCheckout";
import { MenuItem } from "./(components)/menuTypes";

export const metadata = {
  title: "Headless Store",
  description: "Open source headless Storefront",
};

interface RootLayoutProps {
  params: {
    locale: Locale;
    channel: string;
  };
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<RootLayoutProps>) {
  const languageCode = getLanguageCode(params.locale);
  let channel: Channel = params.channel as Channel;
  if (!channel || !channelConfig.list.includes(channel)) {
    channel = channelConfig.defaultChannel;
  }
  const { menu } = await gqlClient.Menu({ slug: "header", languageCode });

  const menuItems = menu?.items || [];

  return (
    <html lang={params.locale} data-theme="liminalThemeBright">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <AppProvider
          value={{
            params: {
              locale: params.locale ?? localeConfig.defaultLocale,
              channel,
            },
            localeConfig: localeConfig,
            channelConfig: channelConfig,
          }}
        >
          <div className="mx-auto my-6 w-full max-w-6xl ">
            <AppRoot menuItems={menuItems}>
              <CheckoutProvider>{children}</CheckoutProvider>
            </AppRoot>
          </div>
        </AppProvider>
        <div id="modal-root" className="absolute top-0 z-10 overflow-hidden" />
      </body>
    </html>
  );
}
