import { localeConfig } from '@/locale-config';
//TODO: Discuss how to list valid channels. Will place the config in src/channel-config.ts for now
import { Channel, channelConfig } from '@/channel-config';
import AppRoot from './(components)/root';
import type { PropsWithChildren } from 'react';
import type { Locale } from '@/locale-config';
import './globals.css';
import { gqlClient } from '@/gql';
import { getLanguageCode } from '@/core/server/locale';
import { AppProvider } from '@/core/client/useApp';
import { CheckoutProvider } from '@/core/client/useCheckout';

export const metadata = {
  title: 'Saleor Storefront Starter',
  description: 'an open-source storefront built using NextJS and Saleor',
  og: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saleor-storefront-starter.vercel.app',
    site_name: 'Saleor Storefront Starter',
    images: [
      {
        url: 'placeholder for placeholder component',
        width: 512,
        height: 512,
        alt: 'Saleor Storefront',
      },
    ],
  },
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
  const { menu } = await gqlClient.Menu({ slug: 'header', languageCode });

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
            <AppRoot>
              <CheckoutProvider>{children}</CheckoutProvider>
            </AppRoot>
          </div>
        </AppProvider>
        <div id="modal-root" className="absolute top-0 z-10 overflow-hidden" />
      </body>
    </html>
  );
}
