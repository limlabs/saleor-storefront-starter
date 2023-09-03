import { getTranslations } from '@/core/server/getTranslations';
import { ResolvedMetadata, ResolvingMetadata } from 'next';
import { Locale } from '@/locale-config';
import { Channel } from '@/channel-config';

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
  };
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const translations = await getTranslations(params.locale);
  const pageTitle = translations('login.pageTitle');
  const pageDescription = translations('login.pageDescription');
  const parentMetadata = await parent;

  return {
    ...parentMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...parentMetadata.openGraph,
      url: `/${params.locale}/forgot-password`,
    },
  };
}
