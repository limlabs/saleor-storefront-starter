import TextInput from "@/app/daisyui/text-input";
import { SubmitButton } from "../../_components/submitButton";
import { gqlClient } from "@/gql";
import { getCheckoutID } from "@/core/server/checkout";
import { RedirectType, redirect } from "next/navigation";
import { CheckoutUrlParams } from "../../types";
import { getLanguageCode } from "@/core/server/locale";
import { AddressFormFields } from "../../_components/addressFormFields";
import { ContactFormFields } from "../../_components/contactFormFields";

const CheckoutDeliveryPage = async ({
  params,
}: {
  params: CheckoutUrlParams;
}) => {
  const shippingMethods = await gqlClient.CheckoutAvailableShippingMethods({
    checkoutID: getCheckoutID(),
    languageCode: getLanguageCode(params.locale),
  });

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
      className="delivery-form flex flex-col gap-10 items-center text-left w-full max-w-md mx-auto px-4 md:px-0 mt-3"
      action={handleSubmit}
    >
      <h1 className="w-full text-3xl">Delivery Info</h1>
      <ContactFormFields />
      <AddressFormFields title="Shipping Address" />
      <fieldset className="flex flex-col items-center justify-center w-full gap-4">
        <h2 className="w-full text-left text-xl lg:text-2xl">
          Shipping Method
        </h2>
        <div className="flex flex-col items-start justify-start w-full">
          {shippingMethods.checkout?.shippingMethods.map((shippingMethod) => (
            <label
              className="flex items-center justify-start gap-2"
              key={shippingMethod.id}
            >
              <input
                type="radio"
                name="shippingMethodId"
                value={shippingMethod.id}
                className="w-5 h-5"
                required
              />
              <span className="text-lg">
                {shippingMethod.name} - $
                {shippingMethod.price.amount.toFixed(2)}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-col gap-4 justify-between items-center w-full max-w-md mx-auto px-4 lg:px-0">
        <SubmitButton variant="primary">Continue to Payment</SubmitButton>
      </div>
    </form>
  );
};

export default CheckoutDeliveryPage;
