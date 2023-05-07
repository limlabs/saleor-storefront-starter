import { ProductGallery } from "@/app/[locale]/(components)/productGallery";
import { FilterOp } from "@/app/[locale]/(components)/searchFilter";
import { getI18N } from "@/core/server/getI18N";
import { gqlClient } from "@/gql";
import type { Locale } from "@/i18n-config";

interface SearchParams extends FilterOp {
  after?: string;
  before?: string;
}
interface PageProps {
  params: {
    locale: Locale;
    channel: string;
  };
  searchParams?: SearchParams;
}

export default async function AllProductsPage({
  params: { locale, channel },
  searchParams = {} as SearchParams,
}: PageProps) {
  const { before, after, ...query } = searchParams;

  const filter = {
    isAvailable: query.isAvailable,
    search: query.search,
    price: {
      gte: query.gte,
      lte: query.lte,
    },
  };

  const languageCode = locale.toUpperCase().replace("-", "_");

  let { products } = await gqlClient.products({
    channel,
    languageCode,
    filter,
    ...(before ? { before, last: 8 } : { after, first: 8 }),
  });

  if (products.edges.length === 0) {
    ({ products } = await gqlClient.products({
      channel: "default-channel",
      languageCode,
      filter,
      ...(before ? { before, last: 8 } : { after, first: 8 }),
    }));
  }

  const i18n = await getI18N(locale);

  return (
    <main>
      <h1 className="m-4 text-xl text-secondary-content">
        <div className="text-sm breadcrumbs">
          <ul>
            <li className="text-secondary">{i18n("Gallery.shop")}</li>
            <li>{i18n("Gallery.all products")}</li>
          </ul>
        </div>
      </h1>
      <section className="container mx-auto">
        <ProductGallery
          products={products}
          locale={locale}
          filter={{
            ...query,
            isAvailable: Boolean(query.isAvailable),
          }}
        />
      </section>
    </main>
  );
}
