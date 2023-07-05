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
  // const { menu } = await gqlClient.Menu({ slug: "navbar", languageCode });
  let channel: Channel = params.channel as Channel;
  if (!channel || !channelConfig.list.includes(channel)) {
    channel = channelConfig.defaultChannel;
  }
  console.log(languageCode);
  const { menu } = await gqlClient.Menu({ slug: "header", languageCode });
  interface MenuItem {
    level: number;
    name: string;
    url?: string | null;
    page?: { slug: string };
    category?: any; // Replace `any` with the correct type if available
    children?: MenuItem[];
    translation?: any; // Replace `any` with the correct type if available
  }
  const menuItems: MenuItem[] = menu?.items || [];
  console.log("items", menuItems);

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
          <AppRoot menuItems={menuItems}>
            <CheckoutProvider>{children}</CheckoutProvider>
          </AppRoot>
        </AppProvider>
        <div id="modal-root" className="absolute top-0 z-10 overflow-hidden" />
      </body>
    </html>
  );
}
