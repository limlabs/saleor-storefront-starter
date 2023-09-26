import TextInput from "@/app/daisyui/text-input";

export const AddressFormFields = ({ title }: { title: string }) => {
  return (
    <fieldset className="flex flex-col items-center justify-center w-full gap-4">
      {title && (
        <h2 className="w-full text-left text-xl lg:text-2xl">{title}</h2>
      )}
      <TextInput
        className="w-full bg-base-300"
        placeholder="Street Address 1"
        name="streetAddress1"
        required
      />
      <TextInput
        className="w-full bg-base-300"
        placeholder="Street Address 2"
        name="streetAddress2"
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
  );
};
