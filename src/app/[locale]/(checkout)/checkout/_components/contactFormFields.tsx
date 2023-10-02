import TextInput from "@/app/daisyui/text-input";

export const ContactFormFields = () => {
  return (
    <fieldset className="flex flex-col items-center justify-center w-full gap-4">
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
  );
};
