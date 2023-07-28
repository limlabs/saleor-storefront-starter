import { FC, Fragment } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useTranslationValues } from "@/core/server/useTranslationValues";
import { ProductSelectionProvider } from "@/core/client/useProductSelection";
import { ProductCard } from "./productCard";
import { LinkButton } from "./linkButton";
import { FilterOp, SearchFilter } from "./searchFilter";
import { productGalleryTranslationKeys } from "@/app/translations/productGallery";
import { searchFilterTranslationKeys } from "@/app/translations/searchFilter";
import { IProductCountableConnection } from "@/gql/sdk";

interface ProductGalleryProps {
  products: IProductCountableConnection;
  filter: FilterOp;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
  products,
  filter,
}) => {
  const { startCursor, endCursor, hasNextPage, hasPreviousPage } =
    products.pageInfo;

  const searchFilterTranslations = useTranslationValues(
    searchFilterTranslationKeys,
    "component"
  );

  const t = useTranslationValues(productGalleryTranslationKeys, "component");

  return (
    <Fragment>
      <SearchFilter filter={filter} t={searchFilterTranslations} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.edges.map(({ node }) => {
          return (
            <li className="carousel-item justify-center m-2 " key={node.slug}>
              <ProductSelectionProvider
                initialQuantity={1}
                initialSelectedVariantID={node.defaultVariant?.id}
                product={node}
              >
                <ProductCard
                  product={node}
                  animation="bounce"
                  className="w-full"
                />
              </ProductSelectionProvider>
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
          <ChevronLeftIcon className="w-6 h-6" /> {t.prev}
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
          {t.next} <ChevronRightIcon className="w-6 h-6" />
        </LinkButton>
      </div>
    </Fragment>
  );
};
