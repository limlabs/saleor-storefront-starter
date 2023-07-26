import { ProductCardSkeleton } from "@/app/[locale]/(components)/productCardSkeleton";

export default function Loading() {
  const itemSkeleton = (
    <li className="carousel-item justify-center m-2">
      <ProductCardSkeleton />
    </li>
  );

  return (
    <main className="container blur-sm animate-pulse mx-auto">
      <h1 className="m-4 text-xl text-secondary-content">
        <div className="text-sm breadcrumbs">
          <ul>
            <li className="text-secondary">Shop</li>
            <li>All Products</li>
          </ul>
        </div>
      </h1>
      <ul className="grid mt-20 w-full md:grid-cols-2 lg:grid-cols-4 lg:gap-2 md:gap-2 ">
        {itemSkeleton}
        {itemSkeleton}
        {itemSkeleton}
        {itemSkeleton}
        {itemSkeleton}
        {itemSkeleton}
        {itemSkeleton}
        {itemSkeleton}
      </ul>
    </main>
  );
}
