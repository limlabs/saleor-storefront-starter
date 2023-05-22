import { AppProvider } from "@/core/client/useApp";
import { localeConfig } from "@/locale-config";
//TODO: Discuss how to list valid channels. Will place the config in src/channel-config.ts for now
import { Channel, channelConfig } from "@/channel-config";
import { RootLayoutHeader } from "./(components)/header";
import AppRoot from "./(components)/root";
import Drawer from "../daisyui/drawer";
import type { PropsWithChildren } from "react";
import type { Locale } from "@/locale-config";
import "./globals.css";
import { gqlClient } from "@/gql";
import { getLanguageCode, setLocale } from "@/core/server/locale";
import { NavbarMenu } from "./(components)/navbarMenu";

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
  setLocale(params.locale);
  const { menu } = await gqlClient.Menu({ slug: "navbar", languageCode });

  let channel: Channel = params.channel as Channel;
  if (!channel || !channelConfig.list.includes(channel)) {
    channel = channelConfig.defaultChannel;
  }

  return (
    <html lang={params.locale} data-theme="liminalThemeBright">
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
          {/* https://github.com/vercel/next.js/issues/42292 */}
          {/* @ts-expect-error Async Server Component */}
          <AppRoot>
            <Drawer
              id="category-menu"
              side={<NavbarMenu menu={menu} locale={params.locale} />}
            >
              <div className="mx-auto my-6 w-full max-w-6xl ">
                <RootLayoutHeader locale={params.locale} />
                {children}
              </div>
            </Drawer>
          </AppRoot>
        </AppProvider>
      </body>
    </html>
  );
}
