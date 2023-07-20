import Button from "@/app/daisyui/button";
import { TextField } from "../(components)/textField";

import RequiredLabel from "../(components)/requiredLabel";
import { Translation } from "../(components)/(translation)";

export const CreateAccount = () => {
  console.log("rendering create account");
  const createAccountKey = "login.create account";
  console.log(createAccountKey);
  return (
    <div className=" flex-col justify-start items-start gap-6 inline-flex">
      <h1 className="text-base-10 text-4xl font-bold ">
        <Translation t={createAccountKey} foo="bar" />
      </h1>
      {/* <p className=" h-5 text-base-10 text-base font-semibold">
        <Translation key="login.sign up message" />
      </p>
      <form className="flex-col justify-start items-start gap-10 inline-flex mt-10 w-full">
        <TextField
          label={<Translation key="login.first name" />}
          id="firstName"
          className="flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          label={<Translation key="login.last name" />}
          id="lastName"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          id="registerEmail"
          label={<RequiredLabel label={<Translation key="login.email" />} />}
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          label={<RequiredLabel label={<Translation key="login.password" />} />}
          id="registerPassword"
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <TextField
          label={
            <RequiredLabel
              label={<Translation key="login.confirm password" />}
            />
          }
          id="confirmPassword"
          type="password"
          className=" flex-col justify-start items-start gap-3 inline-flex w-full"
        />
        <div className="w-full">
          <Button variant="secondary">
            {<Translation key="login.register" />}
          </Button>
        </div>
      </form> */}
    </div>
  );
};
