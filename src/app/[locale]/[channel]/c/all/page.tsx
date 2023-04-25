import { ProductGallery } from "@/app/[locale]/(components)/productGallery";
import { FilterOp } from "@/app/[locale]/(components)/searchFilter";
import { gqlClient } from "@/gql";

interface SearchParams extends FilterOp {
  after?: string;
  before?: string;
}
interface PageProps {
  params: {
    locale: string;
    channel: string;
  };
  searchParams?: SearchParams;
}

export default async function Home({
  params: { channel },
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

  let { products } = await gqlClient.products({
    channel,
    filter,
    ...(before ? { before, last: 8 } : { after, first: 8 }),
  });

  if (products.edges.length === 0) {
    ({ products } = await gqlClient.products({
      channel: "default-channel",
      filter,
      ...(before ? { before, last: 8 } : { after, first: 8 }),
    }));
  }

  return (
    <main>
      <h1 className="m-4 text-xl text-secondary-content">
        <div className="text-sm breadcrumbs">
          <ul>
            <li className="text-secondary">Shop</li>
            <li>All Products</li>
          </ul>
        </div>
      </h1>
      <section className="container mx-auto">
        <ProductGallery
          products={products}
          filter={{
            ...query,
            isAvailable: Boolean(query.isAvailable),
          }}
        />
      </section>
    </main>
  );
}
