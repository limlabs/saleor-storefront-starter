import { Link } from "../../(components)/link";

export interface CartEmptyProps {
  locale?: string;
}

export const CartEmpty = ({ locale }: CartEmptyProps) => {
  return (
    <div className="flex flex-col gap-4 mt-8 md:mt-40 items-center">
      <div>Your cart is empty.</div>
      <Link href="/c/all" locale={locale} className="link link-info">
        Shop for products
      </Link>
    </div>
  );
};
