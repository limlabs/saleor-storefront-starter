import { gqlClient } from "@/gql";
import { ProductHero } from "@/app/[locale]/(components)/productHero";
import { useMemo } from "react";

interface PageProps {
  params: {
    locale: string;
    channel: string;
    slug: string;
  };
}

export default async function Pdp({
  params: { locale, channel, slug },
}: PageProps) {
  const languageCode = locale.toUpperCase().replace("-", "_");
  const { product } = await gqlClient.product({ slug, languageCode });

  const raw = product.translation?.description ?? product.description;
  const description = JSON.parse(raw);

  return (
    <>
      <ProductHero
        locale={locale}
        channel={channel}
        product={product}
      />
    </>
  );
}
