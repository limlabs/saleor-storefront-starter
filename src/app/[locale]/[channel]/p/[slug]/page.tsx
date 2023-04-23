import { gqlClient } from "@/gql";
import { ProductHero } from "@/app/[locale]/(components)/productHero";

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
  let { product } = await gqlClient.product({ slug });


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
