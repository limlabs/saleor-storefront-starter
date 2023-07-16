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
import { getTranslations } from '@/core/server/getTranslations';
import { ResolvingMetadata, ResolvedMetadata } from 'next';

interface RootLayoutProps {
  params: {
    imageUrl: string;
    locale: Locale;
    channel: string;
  };
}

export async function generateMetadata(
  { params }: RootLayoutProps,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const translations = await getTranslations(params.locale);
  // TODO: clear errors below
  // error reads:
  // Element implicitly has an 'any' type because expression of type '"metadata.siteTitle"' can't be used to index type '(path: string) => any'.
  // Property 'metadata.siteTitle' does not exist on type '(path: string) => any'.ts(7053)
  const siteTitle = translations['metadata.siteTitle'];
  const siteDescription = translations['metadata.siteDescription'];
  return {
    ...parent,
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      type: 'website',
      title: siteTitle,
      locale: params.locale,
      url: `/${params.locale}`,
      site_name: siteTitle,
      images: [
        {
          url: params.imageUrl || '/app/(components)/placeholderImage.tsx',
        },
      ],
    },
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
