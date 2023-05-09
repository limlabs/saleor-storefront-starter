import { AppProvider } from "@/core/client/useApp";
import { i18n } from "@/i18n-config";
//TODO: Discuss how to list valid channels. Will place the config in src/channel-config.ts for now
import { channels } from "@/channel-config";
import { AppRoot } from "./(components)/root";
import { RootLayoutHeader } from "./(components)/header";
import "./globals.css";
import type { PropsWithChildren } from "react";
import { Locale } from "@/i18n-config";

export const metadata = {
  title: "Headless Store",
  description: "Open source headless Storefront",
};

interface RootLayoutProps {
  params: {
    locale: Locale;
  };
}

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<RootLayoutProps>) {
  return (
    <html lang={params.locale} data-theme="liminalThemeBright">
      <body>
        <AppProvider value={{ params, i18n, channels }}>
          <AppRoot>
            <div className="mx-auto my-6 w-full max-w-6xl ">
              <RootLayoutHeader locale={params.locale} />
              {children}
            </div>
          </AppRoot>
        </AppProvider>
      </body>
    </html>
  );
}
