import { gqlClient } from "@/gql";
import { ProductHero } from "@/app/[locale]/(components)/productHero";
import { getLanguageCode } from "@/core/server/getLanguageCode";
import type { Locale } from "@/locale-config";
import type { Channel } from "@/channel-config";

interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
    slug: string;
  };
}

export default async function Pdp({
  params: { locale, channel, slug },
}: PageProps) {
  const languageCode = getLanguageCode(locale);
  const { product } = await gqlClient.Product({ slug, languageCode });

  return (
    <>
      {product ? (
        <ProductHero locale={locale} channel={channel} product={product} />
      ) : null}
    </>
  );
}
