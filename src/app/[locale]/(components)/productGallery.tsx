import { FC, Fragment } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "@/app/[locale]/(components)/productCard";
import { LinkButton } from "./linkButton";
import { FilterOp, SearchFilter } from "./searchFilter";
import { ProductCardProvider } from "@/core/client/useProductCard";

interface ProductGalleryProps {
  products: Page<Product>;
  filter: FilterOp;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
  products,
  filter,
}) => {
  const { startCursor, endCursor, hasNextPage, hasPreviousPage } =
    products.pageInfo;

  return (
    <Fragment>
      <SearchFilter filter={filter} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {products.edges.map(({ node }) => {
          return (
            <li className="carousel-item justify-center m-2" key={node.slug}>
              <ProductCardProvider>
                <ProductCard product={node} animation="bounce" />
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
          <ChevronLeftIcon className="w-6 h-6" /> Prev
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
          Next <ChevronRightIcon className="w-6 h-6" />
        </LinkButton>
      </div>
    </Fragment>
  );
};
