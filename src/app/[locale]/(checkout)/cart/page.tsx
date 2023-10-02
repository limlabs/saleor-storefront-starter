import { getLanguageCode, withTranslations } from "@/core/server/locale";
import type { Locale } from "@/locale-config";
import CartHeadline from "./components/CartHeadline";
import { CartProductGrid } from "./components/CartProductGrid";
import { gqlClient } from "@/gql";
import { getCheckoutID } from "@/core/server/checkout";
import { CartEmpty } from "./components/CartEmpty";
import { OrderSummary } from "../../(components)/OrderSummary";
import { Link } from "../../(components)/link";

interface CartPageProps {
  params: {
    locale: Locale;
    channel: string;
  };
}

export default withTranslations<CartPageProps>(async function CartPage({
  params: { locale },
}) {
  const checkoutId = getCheckoutID();
  if (!checkoutId) {
    return <CartEmpty />;
  }

  const { checkout } = await gqlClient.CheckoutCurrentCart({
    checkoutId,
    languageCode: getLanguageCode(locale),
  });

  if (!checkout) {
    return <CartEmpty />;
  }

  return (
    <main className="container mx-auto my-auto pb-10 px-8 md:pl-4 md:pb-4">
      <CartHeadline />
      <div className="flex flex-col justify-between md:flex-row md:items-start">
        <div className="w-full md:max-w-3/4">
          <CartProductGrid checkout={checkout} />
        </div>
        <div className="w-full md:max-w-1/4 justify-end">
          <OrderSummary
            locale={locale}
            actions={
              <Link
                className="btn btn-primary bg-primary hover:bg-primary-focus font-bold py-2 px-4"
                href="/checkout/delivery"
                channel=""
                locale={locale}
              >
                Checkout
              </Link>
            }
          />
        </div>
      </div>
    </main>
  );
});
