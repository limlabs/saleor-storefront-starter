import TextInput from "@/app/daisyui/text-input";
import { SubmitButton } from "../../_components/submitButton";
import { gqlClient } from "@/gql";
import { getCheckoutID } from "@/core/server/checkout";
import { RedirectType, redirect } from "next/navigation";
import { CheckoutUrlParams } from "../../types";

const DeliveryPage = async ({ params }: { params: CheckoutUrlParams }) => {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const streetAddress1 = formData.get("streetAddress1") as string;
    const streetAddress2 = formData.get("streetAddress1") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const zip = formData.get("zip") as string;

    const checkoutID = getCheckoutID();
    try {
      const resp = await gqlClient.CheckoutUpdateAddress({
        checkoutID,
        firstName,
        lastName,
        streetAddress1,
        streetAddress2,
        email,
        city,
        countryArea: state,
        country: "US",
        postalCode: zip,
      });

      if (resp.checkoutEmailUpdate?.errors?.length) {
        console.error(resp.checkoutEmailUpdate.errors);
        return {
          error: "Failed to update email address.",
        };
      }

      if (resp.checkoutShippingAddressUpdate?.errors?.length) {
        console.error(resp.checkoutShippingAddressUpdate.errors);
        return {
          error: "Failed to update shipping address.",
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
      className="delivery-form flex flex-col gap-10 items-center text-left w-full max-w-md mx-auto mt-3"
      action={handleSubmit}
    >
      <h1 className="w-full text-3xl">Delivery Info</h1>
      <fieldset className="flex flex-col items-center justify-center w-full px-4 lg:px-0 gap-4">
        <h2 className="w-full text-left text-xl lg:text-2xl">Contact</h2>
        <TextInput
          className="w-full bg-base-300"
          placeholder="First Name"
          name="firstName"
          required
        />
        <TextInput
          className="w-full bg-base-300"
          placeholder="Last Name"
          name="lastName"
          required
        />
        <TextInput
          className="w-full bg-base-300"
          placeholder="Email"
          name="email"
          type="email"
          required
        />
      </fieldset>
      <fieldset className="flex flex-col items-center justify-center w-full max-w-md mx-auto px-4 lg:px-0 gap-4">
        <h2 className="w-full text-left text-xl lg:text-2xl">Shipping</h2>
        <TextInput
          className="w-full bg-base-300"
          placeholder="Street Address 1"
          name="streetAddress1"
          required
        />
        <TextInput
          className="w-full bg-base-300"
          placeholder="Street Address 2"
          name="streetAddress1"
        />
        <TextInput
          className="w-full bg-base-300"
          placeholder="City"
          name="city"
          required
        />
        <TextInput
          className="w-full bg-base-300"
          placeholder="State"
          name="state"
          required
        />
        <TextInput
          className="w-full bg-base-300"
          placeholder="Zip Code"
          name="zip"
          required
        />
      </fieldset>
      <fieldset className="flex flex-col items-center justify-center w-full max-w-md mx-auto px-4 lg:px-0 gap-4">
        <h2 className="w-full text-left text-xl lg:text-2xl">
          Shipping Method
        </h2>
        <div className="flex flex-col items-start justify-start w-full">
          <label className="flex items-center justify-start gap-2">
            <input
              type="radio"
              name="shipping_method"
              value="standard"
              className="w-5 h-5"
              required
              checked
              readOnly
            />
            <span className="text-lg">Standard</span>
          </label>
        </div>
      </fieldset>
      <div className="flex flex-col gap-4 justify-between items-center w-full max-w-md mx-auto px-4 lg:px-0">
        <SubmitButton variant="primary">Continue to Payment</SubmitButton>
      </div>
    </form>
  );
};

export default DeliveryPage;
