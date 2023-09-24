import { ProductGallery } from "@/app/[locale]/(components)/productGallery";
import { FilterOp } from "@/app/[locale]/(components)/searchFilter";
import { getTranslations } from "@/core/server/getTranslations";
import { getLanguageCode, withTranslations } from "@/core/server/locale";
import Breadcrumbs from "@/app/daisyui/breadcrumbs";
import { Bars3Icon as MenuIcon } from "@heroicons/react/24/outline";
import { gqlClient } from "@/gql";
import type { Locale } from "@/locale-config";
import type { Channel } from "@/channel-config";
import type {
  IProductCountableConnection,
  IProductFilterInput,
} from "@/gql/sdk";
import { ResolvingMetadata, ResolvedMetadata } from "next";

interface SearchParams extends FilterOp {
  after?: string;
  before?: string;
}
interface PageProps {
  params: {
    locale: Locale;
    channel: Channel;
  };
  searchParams?: SearchParams;
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const translations = await getTranslations(params.locale);
  const pageTitle = translations("allProducts.pageTitle");
  const pageDescription = translations("allProducts.pageDescription");
  const parentMetadata = await parent;
  return {
    ...parentMetadata,
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      ...parentMetadata.openGraph,
      title: pageTitle,
      url: `/${params.locale}/${params.channel}/c/all`,
    },
  };
}

export default withTranslations<PageProps>(async function AllProductsPage({
  params: { locale, channel },
  searchParams = {} as SearchParams,
}) {
  const { before, after, ...query } = searchParams;

  const filter: IProductFilterInput = {
    isAvailable: query.isAvailable,
    search: query.search,
    price: {
      gte: Number(query.gte),
      lte: Number(query.lte),
    },
  };

  const languageCode = getLanguageCode(locale);

  let { products } = await gqlClient.Products({
    channel,
    languageCode,
    filter,
    ...(before ? { before, last: 8 } : { after, first: 8 }),
  });

  if (products?.edges.length === 0) {
    ({ products } = await gqlClient.Products({
      channel: "default-channel",
      languageCode,
      filter,
      ...(before ? { before, last: 8 } : { after, first: 8 }),
    }));
  }

  const t = await getTranslations();

  return (
    <main>
      <h1 className="m-4 text-xl ">
        <Breadcrumbs className="text-sm">
          <ul>
            <li className="text-secondary">{t("Gallery.shop")}</li>
            <li>
              <label
                htmlFor="category-menu"
                className="flex gap-1 cursor-pointer"
              >
                <MenuIcon className="w-4 h-4" />
                {t("Gallery.all products")}
              </label>
            </li>
          </ul>
        </Breadcrumbs>
      </h1>
      <section className="container mx-auto">
        <ProductGallery
          products={products as IProductCountableConnection}
          filter={{
            ...query,
            isAvailable: Boolean(query.isAvailable),
          }}
        />
      </section>
    </main>
  );
});
