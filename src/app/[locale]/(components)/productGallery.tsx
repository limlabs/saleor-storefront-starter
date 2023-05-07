import { FC, Fragment } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useI18NValues } from "@/core/server/useI18NValues";
import { ProductCardProvider } from "@/core/client/useProductCard";
import { ProductCard } from "./productCard";
import { LinkButton } from "./linkButton";
import { FilterOp, SearchFilter } from "./searchFilter";
import { productCardI18NKeys } from "@/app/i18n/productCard";
import { productGalleryI18NKeys } from "@/app/i18n/productGallery";
import { searchFilterI18NKeys } from "@/app/i18n/searchFilter";
import type { Locale } from "@/i18n-config";

interface ProductGalleryProps {
  products: Page<Product>;
  filter: FilterOp;
  locale: Locale;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
  products,
  filter,
  locale,
}) => {
  const { startCursor, endCursor, hasNextPage, hasPreviousPage } =
    products.pageInfo;

  const productCardI18N = useI18NValues(
    locale,
    productCardI18NKeys,
    "component"
  );

  const searchFilterI18N = useI18NValues(
    locale,
    searchFilterI18NKeys,
    "component"
  );

  const i18n = useI18NValues(locale, productGalleryI18NKeys, "component");

  return (
    <Fragment>
      <SearchFilter filter={filter}  i18n={searchFilterI18N}/>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.edges.map(({ node }) => {
          return (
            <li className="carousel-item justify-center m-2" key={node.slug}>
              <ProductCardProvider>
                <ProductCard
                  product={node}
                  i18n={productCardI18N}
                  animation="bounce"
                />
              </ProductCardProvider>
            </li>
          );
        })}
      </ul>
      <div className="divider" />
      <div className="flex justify-between">
        <LinkButton
          href={{
            pathname: `/c/all`,
            query: {
              before: startCursor,
              ...filter,
            },
          }}
          disabled={!hasPreviousPage}
          className="btn-neutral"
        >
          <ChevronLeftIcon className="w-6 h-6" /> {i18n.prev}
        </LinkButton>
        <LinkButton
          href={{
            pathname: `/c/all`,
            query: {
              after: endCursor,
              ...filter,
            },
          }}
          disabled={!hasNextPage}
          className="btn-primary"
        >
          {i18n.next} <ChevronRightIcon className="w-6 h-6" />
        </LinkButton>
      </div>
    </Fragment>
  );
};
