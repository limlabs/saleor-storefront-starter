import { withTranslations } from "@/core/server/locale";
import type { Locale } from "@/locale-config";
import CartHeadline from "./components/CartHeadline";
import appleJuice from "./apple-juice.webp";
import shoeBalance from "./shoe-balance.webp";
import { CartProductGrid } from "./components/CartProductGrid";

interface CartPageProps {
  params: {
    locale: Locale;
    channel: string;
  };
}

export default withTranslations<CartPageProps>(function CartPage() {
  return (
    <main className="container mx-auto my-auto pb-10 px-8 md:pl-4 md:pb-4">
      <CartHeadline />
      <CartProductGrid
        items={[
          {
            description: "Product 1",
            price: "10.00",
            quantity: 1,
            productImage: shoeBalance,
            productLink: "/",
          },
          {
            description: "Product 2",
            price: "20.00",
            quantity: 1,
            productImage: appleJuice,
            productLink: "/",
          },
        ]}
      />
    </main>
  );
});
