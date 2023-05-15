import { AppProvider } from "@/core/client/useApp";
import { localeConfig } from "@/locale-config";
//TODO: Discuss how to list valid channels. Will place the config in src/channel-config.ts for now
import { channelConfig } from "@/channel-config";
import { RootLayoutHeader } from "./(components)/header";
import AppRoot from "./(components)/root";
import Drawer from "../daisyui/drawer";
import Menu from "../daisyui/menu";
import type { PropsWithChildren } from "react";
import type { Locale } from "@/locale-config";
import "./globals.css";
import { gqlClient } from "@/gql";
import { getLanguageCode } from "@/core/server/getLanguageCode";
import { renderMenuItems } from "@/core/server/renderMenuItems";
import MenuTitle from "../daisyui/menu-title";
import { getTranslations } from "@/core/server/getTranslations";

export const metadata = {
  title: "Headless Store",
  description: "Open source headless Storefront",
};

interface RootLayoutProps {
  params: {
    locale: Locale;
  };
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<RootLayoutProps>) {
  const languageCode = getLanguageCode(params.locale);
  const { menu } = await gqlClient.Menu({ slug: "navbar", languageCode });
  const t = await getTranslations(params.locale);
  
  return (
    <html lang={params.locale} data-theme="liminalThemeBright">
      <body>
        <AppProvider
          value={{
            params,
            localeConfig: localeConfig,
            channelConfig: channelConfig,
          }}
        >
          {/* https://github.com/vercel/next.js/issues/42292 */}
          {/* @ts-expect-error Async Server Component */}
          <AppRoot>
            <Drawer
              id="category-menu"
              side={
                <Menu className="p-4 w-80 bg-base-100 text-base-content">
                  <MenuTitle>{t("menu.categories")}</MenuTitle>
                  {renderMenuItems(menu)}
                </Menu>
              }
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
