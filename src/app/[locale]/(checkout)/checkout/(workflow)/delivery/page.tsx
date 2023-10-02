import { gqlClient } from "@/gql";
import { getCheckoutID } from "@/core/server/checkout";
import { RedirectType, redirect } from "next/navigation";
import { CheckoutUrlParams } from "../../types";
import { getLanguageCode } from "@/core/server/locale";
import { AddressFormFields } from "../../_components/addressFormFields";
import { ContactFormFields } from "../../_components/contactFormFields";
import { OrderSummary } from "@/app/[locale]/(components)/OrderSummary";
import { SubmitButton } from "../../_components/submitButton";
import { ShippingMethods } from "../../_components/shippingMethods";

const CheckoutDeliveryPage = async ({
  params,
}: {
  params: CheckoutUrlParams;
}) => {
  const checkoutID = getCheckoutID();
  if (!checkoutID) {
    redirect(`/${params.locale}/cart`, RedirectType.push);
  }

  const { checkout } = await gqlClient.CheckoutDeliveryInfo({
    checkoutID,
    languageCode: getLanguageCode(params.locale),
  });

  if (!checkout) {
    redirect(`/${params.locale}/cart`, RedirectType.push);
  }

  const handleSubmit = async (formData: FormData) => {
    "use server";

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const streetAddress1 = formData.get("streetAddress1") as string;
    const streetAddress2 = formData.get("streetAddress2") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const zip = formData.get("zip") as string;
    const deliveryMethodId = formData.get("shippingMethodId") as string;

    const checkoutID = getCheckoutID();
    try {
      const req = {
        checkoutID,
        firstName,
        lastName,
        streetAddress1,
        streetAddress2,
        email,
        city,
        countryArea: state,
        country: "US" as any,
        postalCode: zip,
        deliveryMethodId,
      };

      console.log(req);
      const resp = await gqlClient.CheckoutUpdateDeliveryInfo(req);
      console.log(JSON.stringify(resp, null, 2));

      if (resp.checkoutEmailUpdate?.errors?.length) {
        return {
          error: "Failed to update email address.",
        };
      }

      if (resp.checkoutShippingAddressUpdate?.errors?.length) {
        return {
          error: "Failed to update shipping address.",
        };
      }

      if (resp.checkoutDeliveryMethodUpdate?.errors?.length) {
        return {
          error: "Failed to update delivery method.",
        };
      }
    } catch (e) {
      console.error(e);
      return {
        error: "Failed when contacting commerce platform",
      };
    }

    redirect(`/${params.locale}/checkout/payment`, RedirectType.push);
  };

  return (
    <form
      className="delivery-form grid grid-cols-2 gap-5 text-left w-full max-w-screen-xl mx-auto px-4 md:px-0 mt-3"
      action={handleSubmit}
    >
      <div className="col-span-2 md:col-span-1 flex flex-col gap-10">
        <h1 className="w-full text-3xl">Delivery Info</h1>
        <ContactFormFields />
        <AddressFormFields title="Shipping Address" />
        <ShippingMethods shippingMethods={checkout.shippingMethods} />
      </div>
      <div className="col-span-2 md:col-span-1">
        <OrderSummary
          includeShipping
          actions={<SubmitButton variant="primary">Payment Info</SubmitButton>}
        />
      </div>
    </form>
  );
};

export default CheckoutDeliveryPage;
