import TextInput from "@/app/daisyui/text-input";
import { ICheckoutDeliveryInfoQuery } from "@/gql/sdk";

export const AddressFormFields = ({
  title,
  deliveryInfo,
  labels = {},
}: {
  title: string;
  deliveryInfo: NonNullable<ICheckoutDeliveryInfoQuery["checkout"]>;
  labels?: {
    firstName?: string;
  };
}) => {
  const defaultLabels: { [key in keyof typeof labels]: string } = {
    firstName: "Recipient Name",
  };

  return (
    <fieldset className="flex flex-col items-center justify-center w-full gap-4">
      {title && (
        <h2 className="w-full text-left text-xl lg:text-2xl">{title}</h2>
      )}
      <TextInput
        className="w-full bg-base-300"
        placeholder={labels.firstName ?? defaultLabels.firstName}
        name="firstName"
        aria-label={labels.firstName ?? defaultLabels.firstName}
        required
        defaultValue={deliveryInfo.shippingAddress?.firstName}
      />
      <TextInput
        className="w-full bg-base-300"
        placeholder="Street Address 1"
        name="streetAddress1"
        defaultValue={deliveryInfo.shippingAddress?.streetAddress1}
        required
      />
      <TextInput
        className="w-full bg-base-300"
        placeholder="Street Address 2"
        name="streetAddress2"
        defaultValue={deliveryInfo.shippingAddress?.streetAddress2}
      />
      <TextInput
        className="w-full bg-base-300"
        placeholder="City"
        name="city"
        required
        defaultValue={deliveryInfo.shippingAddress?.city}
      />
      <TextInput
        className="w-full bg-base-300"
        placeholder="State"
        name="state"
        required
        defaultValue={deliveryInfo.shippingAddress?.countryArea}
      />
      <TextInput
        className="w-full bg-base-300"
        placeholder="Zip Code"
        name="zip"
        required
        defaultValue={deliveryInfo.shippingAddress?.postalCode}
      />
    </fieldset>
  );
};
